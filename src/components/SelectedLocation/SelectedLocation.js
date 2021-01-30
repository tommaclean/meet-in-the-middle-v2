import React from 'react'
import '../SelectedLocation/SelectedLocation.css'
import { connect } from 'react-redux'
import { confirmSelection, getMeetups } from '../../state/actions/meetupsActions'


const SelectedLocation = (props) => {
    console.log("SelectedLocation props", props)
    const handleConfirmSelection = () => {
      props.confirmSelection(
        console.log("confirmSelection props:", props)
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
    selectedResult: state.searchResults.selectedResult
  }
}

const mapDispatchToProps = {
  confirmSelection: confirmSelection,
  getMeetups: getMeetups
}


export default connect(mapStateToProps, mapDispatchToProps)(SelectedLocation)