import React from 'react'
import '../SelectedLocation/SelectedLocation.css'
import { connect } from 'react-redux'
import { confirmSelection } from '../../state/actions/meetupActions'
import { getMeetups }  from '../../state/actions/meetupActions'


const SelectedLocation = (props) => {
    const handleConfirmSelection = () => {
      props.confirmSelection(props.selectedResult.name, "Charlie Brown").then(props.getMeetups)
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