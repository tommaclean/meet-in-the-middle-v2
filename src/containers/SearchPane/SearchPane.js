import React from 'react'
import { connect } from 'react-redux'
import FormInput from '../../UI/FormInput/FormInput';
import SearchResults from '../SearchResults/SearchResults'
import SelectedLocation from '../../components/SelectedLocation/SelectedLocation'
import { handleAddressSubmit } from '../../actions/searchResultsActions'


function SearchPane({handleAddressSubmit}){
        return (
            <div>
              <FormInput handleAddressSubmit={handleAddressSubmit}/>
              <SelectedLocation />
              <SearchResults />
            </div>
        )
}


const mapDispatchToProps = {
  handleAddressSubmit: handleAddressSubmit
}



export default connect(null, mapDispatchToProps)(SearchPane)