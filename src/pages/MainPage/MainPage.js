import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import Map from '../../components/Map/Map'
import SearchPane from '../../containers/SearchPane/SearchPane'
import Spinner from '../../components/UI/Spinner/Spinner'
import SelectedLocation from '../../components/SelectedLocation/SelectedLocation'
import { handleLogOut, getProfile } from '../../state/actions/usersActions'
import { handleAddressSubmit } from '../../state/actions/searchResultsActions'
import './MainPage.css'


const MainPage = (props) => {
        const dispatch = useDispatch();
        const history = useHistory();
        const showSelectedLocation = useSelector(state => state.searchResults.showSelectedLocation)
        const searchResults = useSelector(state => state.searchResults.searchResults)
        const midpoint = useSelector(state => state.searchResults.midpoint)
        const loading = useSelector(state => state.searchResults.loading)
       

        useEffect(() => {
            if (localStorage.token) {
              dispatch(getProfile())
            } else {
              history.push('/login')
            }
          }, [history, searchResults])
        

        return (
          <div>
            
             { loading ? 
              <div className="Spinner-container">
                <Spinner /> 
              </div>
             : null }
            <div className="MainPage-container">
                  <div className="Search-pane">
                  <div className="selectedLocationDiv">
                    {showSelectedLocation ? <SelectedLocation /> : null }
                  </div>
                    <SearchPane />
                  </div>
                  <div className="Map">
                    <Map markers={searchResults} midpoint={midpoint} />
                  </div>
              </div>
               
        </div>
            
        )
}


const mapDispatchToProps = {
  handleLogOut: handleLogOut,
  getProfile: getProfile,
  handleAddressSubmit: handleAddressSubmit
}


export default MainPage;