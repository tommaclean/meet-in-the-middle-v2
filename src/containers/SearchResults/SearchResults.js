import React from 'react'
import '../SearchResults/SearchResults.css'
import { connect } from 'react-redux'
import './SearchResults.css'
import { handleLocationSelection } from '../../state/actions/searchResultsActions'

const SearchResults = (props) => {
    let mappedResults
    if (props.searchResults.length > 0 ) {
        mappedResults = props.searchResults.map((result, index) => {
        return (
            <div key={index} className="header">
                <div key={result.id} className="SearchResult">
                    <h3 className="li">Name: {result.name}</h3>
                    <h2 className="ul">Address: {result.vicinity}</h2>
                    <h4>Status: {result.business_status}</h4>
                    <button onClick={() => props.handleLocationSelection(result)}>Select Location</button>
                </div>
            </div>
        )})}
    return (
            
                <div className="ScrollableSearchResults">
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