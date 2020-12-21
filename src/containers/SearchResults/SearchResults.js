import React from 'react'
import { connect } from 'react-redux'
import classes from './SearchResults.module.css'
import { handleLocationSelection } from '../../actions/searchResultsActions'

function SearchResults(props) {
    let mappedResults
    if (props.searchResults.length > 0 ) {
        mappedResults = props.searchResults.map((result, index) => {
        return (
            <p key={result.place_id} className={classes.SearchResults}>
                <li className={classes.li}>Name: {result.name}</li>
                <li className={classes.ul}>Address: {result.vicinity}</li>
                <li>Status: {result.business_status}</li>
                <button onClick={() => props.handleLocationSelection(result)}>Select Location</button>
            </p>
        )})}
    return (
            <div>
                Your Search Results:
                    {mappedResults}   
            </div>
    )
}

const mapStateToProps = state => {
    return {
      searchResults: state.searchResults.searchResults,
      selectedResult: state.selectedResult
    }
  }

const mapDispatchToProps = {
    handleLocationSelection: handleLocationSelection
}



export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)