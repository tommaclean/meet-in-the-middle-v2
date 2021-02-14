import React from 'react'
import '../SelectedLocation/SelectedLocation.css'
import { connect } from 'react-redux'
import { confirmSelection, getMeetups } from '../../state/actions/meetupsActions'


const SelectedLocation = (props) => {
    const handleConfirmSelection = () => {
      props.confirmSelection({
        user_id: props.currentUser, 
        place_coor: props.selectedResult.geometry.location,
        address: props.selectedResult.vicinity, 
        name: props.selectedResult.name, 
        status: props.selectedResult.business_status,
        place_id: props.selectedResult.place_id,
        price_level: props.selectedResult.price_level
      }
      )
    }
 
    return (
      <div className="selectedLocationBody">
        <h4>Your Selected Result!</h4>
        <h1>{props.selectedResult.name}</h1>
        <h3>{props.selectedResult.vicinity}</h3>
        <button onClick={handleConfirmSelection}>Confirm This Location</button>
      </div>
    )
}

const mapStateToProps = state => {
  return {
    selectedResult: state.searchResults.selectedResult,
    currentUser: state.users.currentUser.id
  }
}

const mapDispatchToProps = {
  confirmSelection: confirmSelection,
  getMeetups: getMeetups
}


export default connect(mapStateToProps, mapDispatchToProps)(SelectedLocation)