import React from 'react'
import { connect } from 'react-redux'


const SelectedLocation = ({selectedResult}) => {
  
    return (
      <div>
        <h1>Your Selected Result!</h1>
        {selectedResult.name} - {selectedResult.vicinity}
        <button>Confirm This Location</button>
      </div>
    )
}

const mapStateToProps = state => {
  return {
    selectedResult: state.searchResults.selectedResult
  }
}


export default connect(mapStateToProps, null)(SelectedLocation)