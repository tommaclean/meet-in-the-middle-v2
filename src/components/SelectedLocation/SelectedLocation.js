import React from 'react'
import { connect } from 'react-redux'
import { confirmSelection } from '../../actions/searchResultsActions'


const SelectedLocation = (props) => {
    return (
      <div>
        <h4>Your Selected Result!</h4>
        {props.selectedResult.name} - {props.selectedResult.vicinity}
        <button onClick={() => props.confirmSelection(props.selectedResult.name, "Annieeee")}>Confirm This Location</button>
      </div>
    )
}

const mapStateToProps = state => {
  return {
    selectedResult: state.searchResults.selectedResult
  }
}

const mapDispatchToProps = {
  confirmSelection: confirmSelection
}


export default connect(mapStateToProps, mapDispatchToProps)(SelectedLocation)