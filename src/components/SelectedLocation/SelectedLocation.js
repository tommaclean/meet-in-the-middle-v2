import React from 'react'
import '../SelectedLocation/SelectedLocation.css'
import { connect } from 'react-redux'
import { confirmSelection, getMeetups } from '../../state/actions/meetupsActions'


const SelectedLocation = (props) => {
    let locationInfo
    console.log("SelectedLocation props", props)
    const handleConfirmSelection = () => {
      props.confirmSelection({locationInfo: {
        user: props.currentUser, 
        place_coor: props.selectedResult.place_coor,
        address: props.selectedResult.address, 
        name: props.selectedResult.name, 
        status: props.selectedResult.status,
        place_id: props.selectedResult.place_id,
        price_level: props.selectedResult.price_level
      }}
      ).then(props.getMeetups)
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