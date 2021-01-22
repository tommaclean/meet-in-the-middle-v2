import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom';
import Map from '../../components/Map/Map'
import Header from '../../components/UI/Header/Header';
import SearchPane from '../../containers/SearchPane/SearchPane'
import { handleLogOut, getProfile } from '../../state/actions/usersActions'
import './MainPage.css'


const MainPage = (props) => {
        const history = useHistory();

        useEffect(() => {
            if (localStorage.token) {
              props.getProfile()
            } else {
              history.push('/login')
            }
          }, [localStorage.token])
        

        return (
          <div>
            { localStorage.token ? 
              <div className="MainPage-header">
                <Header />
                <div className="MainPage-container">
                  <SearchPane />
                  <Map />
                </div>
              </div> : null 
          }
        </div>
            
        )
}

const mapStateToProps = state => {
  return {
      loggedIn: state.user.loggedIn
  }
}

const mapDispatchToProps = {
  handleLogOut: handleLogOut,
  getProfile: getProfile
}


export default connect(mapStateToProps, mapDispatchToProps)(MainPage);