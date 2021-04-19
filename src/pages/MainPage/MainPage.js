import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom';
import Map from '../../components/Map/Map'
import SearchPane from '../../containers/SearchPane/SearchPane'
import { handleLogOut, getProfile } from '../../state/actions/usersActions'
import { handleAddressSubmit } from '../../state/actions/searchResultsActions'
import './MainPage.css'


const MainPage = (props) => {
        const history = useHistory();
      

        useEffect(() => {
            if (localStorage.token) {
              props.getProfile()
            } else {
              history.push('/login')
            }
          }, [history, props.searchResults])
        

        return (
          <div>
            <div className="MainPage-container">
                  <div className="Search-pane">
                    <SearchPane />
                  </div>
                  <div className="Map">
                    <Map markers={props.searchResults} midpoint={props.midpoint} />
                  </div>
              </div>
               
        </div>
            
        )
}

const mapStateToProps = state => {
  return {
      loggedIn: state.users.loggedIn,
      searchResults: state.searchResults.searchResults,
      midpoint: state.searchResults.midpoint,
      showFormInput: state.searchResults.showFormInput
  }
}

const mapDispatchToProps = {
  handleLogOut: handleLogOut,
  getProfile: getProfile,
  handleAddressSubmit: handleAddressSubmit
}


export default connect(mapStateToProps, mapDispatchToProps)(MainPage);