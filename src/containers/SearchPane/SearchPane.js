import React, { useState } from 'react'
import { connect } from 'react-redux'
import FormInput from '../../UI/FormInput/FormInput';
import { handlePlacesFetch, handleAddressSubmit } from '../../actions/meetupActions'
import Geocode from 'react-geocode';
Geocode.setApiKey(process.env.REACT_APP_GOOGLE_KEY);


function SearchPane(){
    const [address1Coor, setAddress1Coor] = useState([])
    const [address2Coor, setAddress2Coor] = useState([])
    const [address3Coor, setAddress3Coor] = useState([])
    


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
        return (
            <div>
              <FormInput handleAddressSubmit={handleAddressSubmit}/>
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

const mapDispatchToProps = {
  handlePlacesFetch: handlePlacesFetch,
  handleAddressSubmit: handleAddressSubmit
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPane)