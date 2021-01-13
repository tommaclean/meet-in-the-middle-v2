import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom';
import Map from '../../components/Map/Map'
import Header from '../../components/UI/Header/Header'
import ProfilePage from '../ProfilePage/Profile/ProfilePage'
import SearchPane from '../../containers/SearchPane/SearchPane'
import { handleLogOut } from '../../state/actions/userActions'
import useToggle from '../../snippets/useToggle'
import './MainPage.css'


const MainPage = (props) => {
        const [showProfile, toggleProfile] = useToggle();
        const history = useHistory();
        
        if (!props.loggedIn) {
          history.push('/login')
        }
        
        return (
            <div className="MainPage-header">
                <Header />
                {props.loggedIn ? <button onClick={props.handleLogOut}>Log Out</button> : null }
                {props.loggedIn ? <button onClick={toggleProfile}>Profile</button> : null }
                 {showProfile ? <ProfilePage /> : null }
                
                <SearchPane />
                <Map />
            </div>
        )
}

const mapStateToProps = state => {
  return {
      loggedIn: state.user.loggedIn
  }
}

const mapDispatchToProps = {
  handleLogOut: handleLogOut
}


export default connect(mapStateToProps, mapDispatchToProps)(MainPage);