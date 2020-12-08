import React from 'react'
import { connect } from 'react-redux'
import FormInput from '../../UI/FormInput/FormInput';
import SearchResults from '../SearchResults/SearchResults'
import { handleAddressSubmit } from '../../actions/searchResultsActions'


function SearchPane(){
        return (
            <div>
              <FormInput handleAddressSubmit={handleAddressSubmit}/>
              <SearchResults />
            </div>
        )
}

const mapStateToProps = state => {
  return {
    address1: state.address1,
    address2: state.address2,
    address3: state.address3
  }
}

const mapDispatchToProps = {
  handleAddressSubmit: handleAddressSubmit
}



export default connect(mapStateToProps, mapDispatchToProps)(SearchPane)