import React from 'react'
import { connect } from 'react-redux'
import classes from './SearchResults.module.css'
import { handleLocationSelection } from '../../actions/searchResultsActions'

function SearchResults(props) {
    let mappedResults
    if (props.searchResults.length > 0 ) {
        mappedResults = props.searchResults.map((result, index) => {
        return (
            <div key={result.id} className={classes.SearchResults}>
                <li className={classes.li}>Name: {result.name}</li>
                <li className={classes.ul}>Address: {result.vicinity}</li>
                <li>Status: {result.business_status}</li>
                <button onClick={() => props.handleLocationSelection(result)}>Select Location</button>
            </div>
        )})}
    return (
            <div className={classes.header}>
                    Your Search Results:
                <div className={classes.ScrollableSearchResults}>
                        {mappedResults}   
                </div>
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