import React, { Component } from 'react'
import Geocode from 'react-geocode';
Geocode.setApiKey(process.env.REACT_APP_GOOGLE_KEY);


class SearchPane extends Component {
    state = {
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
        input1Choice: true,
        input2Choice: true,
        input3Choice: true,
        openConfirmationModal: false
  
    }

    handleAddressTypingChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleAddressSubmit = (e) => {
        e.preventDefault()
        if ([this.state.address1, this.state.address2, this.state.address3] === "") {
          alert("Have you entered valid addresses for each user?");
          return false;
        }
    
        let promise1 = Geocode.fromAddress(this.state.address1).then(
            response => {
              const { lat, lng } = response.results[0].geometry.location;
              let lat1 = lat
              let lng1 = lng
              this.setState({ lats: [...this.state.lats, lat], lngs: [...this.state.lngs, lng], address1Coor: [...this.state.address1Coor, lat, lng]})
              console.log(lat1, lng1, "address 1")
            },
            error => {
              console.error(error, "address 1");
            }
          );
    
        let promise2 = Geocode.fromAddress(this.state.address2).then(
            response => {
              const { lat, lng } = response.results[0].geometry.location;
              let lat2 = lat
              let lng2 = lng
              this.setState({ lats: [...this.state.lats, lat2], lngs: [...this.state.lngs, lng2], address2Coor: [...this.state.address2Coor, lat, lng] })
              console.log(lat2, lng2, "address 2");
            },
            error => {
              console.error(error, "address 2");
            }
          );
    
        let promise3 = Geocode.fromAddress(this.state.address3).then(
            response => {
              const { lat, lng } = response.results[0].geometry.location;
              this.setState({ lats: [lat, ...this.state.lats], lngs: [lng, ...this.state.lngs], address3Coor: [...this.state.address3Coor, lat, lng] })
              console.log(lat, lng, "address 3");
            },
            error => {
              console.error(error, "address 3");
            }
          );
    
        Promise.all([promise1, promise2, promise3]).then(() => this.handleMidpointCalculation())
    
    }

    handleMidpointCalculation = () => {
        if (this.state.address1 === "" || this.state.address2 === "" || this.state.address3 === "") {
          alert("Hey why don't you go back and input some REAL addresses, buddy?")
        } else {
        let latSum = this.state.lats.reduce((previous, current) => current += previous);
        let latAvg = latSum / 3;
  
        let lngSum = this.state.lngs.reduce((previous, current) => current += previous);
        let lngAvg = lngSum / 3;
  
        this.setState({ midpoint: [...this.state.midpoint, latAvg] })
        this.setState({ midpoint: [...this.state.midpoint, lngAvg] })

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
    
    handleResetState = (e) => {
        this.setState({ address1: "", address2: "", address3: "" })
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                    Address 1:
                    <input type="text" name="address1" value={this.state.address1} onChange={this.handleAddressTypingChange} />
                    </label>
                    <label>
                    Address 2:
                    <input type="text" name="address2" value={this.state.address2} onChange={this.handleAddressTypingChange} />
                    </label>
                    <label>
                    Address 3:
                    <input type="text" name="address3" value={this.state.address3} onChange={this.handleAddressTypingChange} />
                    </label>
                    <input type="submit" onClick={this.handleAddressSubmit}/>
                </form>
                { this.state.midpointAddress !== "" ? `The mid-point is ${this.state.midpointAddress}` : null }
            </div>
        )
    }
}

export default SearchPane