import React from 'react'
import { connect } from 'react-redux'
import Button from '../../components/UI/Button/Button'
import './SearchResults.css'
import { handleLocationSelection, clearSearchResults } from '../../state/actions/searchResultsActions'





const SearchResults = (props) => {
    let mappedResults

    if (props.searchResults.length > 0) {
        mappedResults = props.searchResults.map((result, index) => {
        return (
            <div key={index} className="individualResult" onClick={() => props.handleLocationSelection(result)}>
                <div key={result.id} className="SearchResult">
                    <li className="resultName">{result.name}</li>
                    <li className="resultAddress">{result.vicinity}</li>
                    <li className="resultStatus">Status: {result.business_status}</li>
                    <div>
                    <Button className="resultButton">Select Location</Button>
                    </div>
                </div>
            </div>
        )})}
    
    return (
            
                <div>
                    <div className="toggleFormInput" onClick={() => props.handleBackToAddresses()}>
                        <Button>Back to Addresses</Button>
                    </div>
                   
                    <br />
                        <div className="ScrollableSearchResults">
                            Your Search Results:
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
    handleLocationSelection: handleLocationSelection,
    clearSearchResults: clearSearchResults
    
}



export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)