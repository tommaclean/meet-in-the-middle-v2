import React from 'react'
import { connect } from 'react-redux'
import FormInput from '../../UI/FormInput/FormInput';
import SearchResults from '../SearchResults/SearchResults'
import SelectedLocation from '../../components/SelectedLocation/SelectedLocation'
import { handleAddressSubmit } from '../../actions/searchResultsActions'


function SearchPane(props){
        // console.log('search pane props', props)
        return (
            <div>
              <FormInput handleAddressSubmit={props.handleAddressSubmit}/>
              {props.showSelectedLocation ? <SelectedLocation showSelectedLocation={props.showSelectedLocation}/> : null }
              <SearchResults />
            </div>
        )
}


const mapDispatchToProps = {
  handleAddressSubmit: handleAddressSubmit
}

const mapStateToProps = state => {
  return {
    showSelectedLocation: state.searchResults.showSelectedLocation
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(SearchPane)