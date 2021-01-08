import React from 'react'
import { connect } from 'react-redux'
import classes from './SearchResults.module.css'
import { handleLocationSelection } from '../../actions/searchResultsActions'

function SearchResults(props) {
    let mappedResults
    if (props.searchResults.length > 0 ) {
        mappedResults = props.searchResults.map((result, index) => {
        return (
            <div key={index} className={classes.header}>
                <div key={result.id} className={classes.SearchResults}>
                    <h3 className={classes.li}>Name: {result.name}</h3>
                    <h2 className={classes.ul}>Address: {result.vicinity}</h2>
                    <h4>Status: {result.business_status}</h4>
                    <button onClick={() => props.handleLocationSelection(result)}>Select Location</button>
                </div>
            </div>
        )})}
    return (
            
                <div className={classes.ScrollableSearchResults}>
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