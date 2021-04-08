import React from 'react'
import '../SelectedLocation/SelectedLocation.css'
import Button from '../UI/Button/Button'
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
        <div className="selectedLocationDetail">
          <div className="headline">Your Selected Result!</div>
          <div className="name">{props.selectedResult.name}</div>
          <div className="vicinity">{props.selectedResult.vicinity}</div>
        </div>
        <div className="selectedLocationDetail" onClick={handleConfirmSelection}>
          <Button>Confirm This Location</Button>
        </div>
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