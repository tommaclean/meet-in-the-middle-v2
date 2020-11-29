import React, { useState } from 'react'
import { connect } from 'react-redux'
import Geocode from 'react-geocode';
import FormInput from '../../UI/FormInput/FormInput';
import InputForm from '../../UI/FormInput/FormInput'
Geocode.setApiKey(process.env.REACT_APP_GOOGLE_KEY);


function SearchPane(){
    
    const inputState = useState({
        address1: "",
        address2: "",
        address3: "",
        address1Coor: [],
        address2Coor: [],
        address3Coor: [],
        lats: [],
        lngs: [],
        midpoint: [],
        midpointAddress: "",
        // input1Choice: true,
        // input2Choice: true,
        // input3Choice: true,
        openConfirmationModal: false
    })

    const handleAddressTypingChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    const handleAddressSubmit = (e) => {
        e.preventDefault()
        // ---- Need to refactor - need to figure out how to have dummy proof address forms

        // if ([inputState.[0].address1, inputState.[0].address2, inputState.[0].address3] === "") {
        //   alert("Have you entered valid addresses for each user?");
        //   return false;
        // }
    
        let promise1 = Geocode.fromAddress(inputState.[0].address1).then(
            response => {
              const { lat, lng } = response.results[0].geometry.location;
              let lat1 = lat
              let lng1 = lng
              this.setState({ lats: [...inputState.[0].lats, lat], lngs: [...inputState.[0].lngs, lng], address1Coor: [...inputState.[0].address1Coor, lat, lng]})
              console.log(lat1, lng1, "address 1")
            },
            error => {
              console.error(error, "address 1");
            }
          );
    
        let promise2 = Geocode.fromAddress(inputState.[0].address2).then(
            response => {
              const { lat, lng } = response.results[0].geometry.location;
              let lat2 = lat
              let lng2 = lng
              this.setState({ lats: [...inputState.[0].lats, lat2], lngs: [...inputState.[0].lngs, lng2], address2Coor: [...inputState.[0].address2Coor, lat, lng] })
              console.log(lat2, lng2, "address 2");
            },
            error => {
              console.error(error, "address 2");
            }
          );
    
        let promise3 = Geocode.fromAddress(inputState.[0].address3).then(
            response => {
              const { lat, lng } = response.results[0].geometry.location;
              this.setState({ lats: [lat, ...inputState.[0].lats], lngs: [lng, ...inputState.[0].lngs], address3Coor: [...inputState.[0].address3Coor, lat, lng] })
              console.log(lat, lng, "address 3");
            },
            error => {
              console.error(error, "address 3");
            }
          );
    
        Promise.all([promise1, promise2, promise3]).then(() => this.handleMidpointCalculation())
    
    }

    const handleMidpointCalculation = () => {
        if (inputState.[0].address1 === "" || inputState.[0].address2 === "" || inputState.[0].address3 === "") {
          alert("Hey why don't you go back and input some REAL addresses, buddy?")
        } else {
        let latSum = inputState.[0].lats.reduce((previous, current) => current += previous);
        let latAvg = latSum / 3;
  
        let lngSum = inputState.[0].lngs.reduce((previous, current) => current += previous);
        let lngAvg = lngSum / 3;
  
        this.setState({ midpoint: [...inputState.[0].midpoint, latAvg] })
        this.setState({ midpoint: [...inputState.[0].midpoint, lngAvg] })

        Geocode.fromLatLng(latAvg, lngAvg).then(
            response => {
              const address = response.results[0].formatted_address;
              console.log(address);
              this.setState({ midpointAddress: address})
            },
            error => {
              console.error(error);
            }
          );
  
        // this.props.handlePlacesFetch(this.state)
        this.handleResetState()
      }
    }

    const handlePlacesFetch = (e) => {
      this.setState({ addresses: [...inputState.[0].addresses, e.address1Coor, e.address2Coor, e.address3Coor ], defaultCenter: { lat: e.midpoint[0], lng: e.midpoint[1] }})
      fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${e.midpoint}&radius=1500&types=bar&key=${process.env.REACT_APP_GOOGLE_KEY}`)
        .then(res => res.json())
        .then(placesFetch => {(
          this.setState({ results: placesFetch.results, defaultZoom: 14 })
        )}
      )
    }
    
    // const handleResetState = (e) => {
    //     this.setState({ address1: "", address2: "", address3: "" })
    // }

        return (
            <div>
              <FormInput handleAddressSubmit={handleAddressSubmit}/>
                {/* <form onSubmit={handleAddressSubmit}>
                    <label>
                    Address 1:
                    <input type="text" name="address1" value={inputState.[0].address1} onChange={event => inputState[1]({ address1: event.target.value})} />
                    </label>
                    <label>
                    Address 2:
                    <input type="text" name="address2" value={inputState.[0].address2} onChange={event => inputState[1]({ address2: event.target.value})} />
                    </label>
                    <label>
                    Address 3:
                    <input type="text" name="address3" value={inputState.[0].address3} onChange={event => inputState[1]({ address3: event.target.value})} />
                    </label>
                    <input type="submit" />
                </form> */}
                { inputState.[0].midpointAddress !== "" ? `The mid-point is ${inputState.[0].midpointAddress}` : null }
            </div>
        )
}

const mapStateToProps = state => {
  return {
    address1: state.address1,
    address2: state.address2,
    address3: state.address3
  }
}

export default connect()(SearchPane)