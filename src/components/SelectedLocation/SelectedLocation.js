import React from 'react'
import classes from '../SelectedLocation/SelectedLocation.module.css'
import { connect } from 'react-redux'
import { confirmSelection } from '../../actions/meetupActions'
import { getMeetups }  from '../../actions/meetupActions'


const SelectedLocation = (props) => {
    const handleConfirmSelection = () => {
      // console.log('handleConfirmSelection props', props)
      props.confirmSelection(props.selectedResult.name, "Charlie Brown").then(props.getMeetups)
    }
    return (
      <div className={classes.selectedLocationBody}>
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