import React from 'react'
import { connect } from 'react-redux'
import LoginPage from '../LoginPage/LoginPage'
import Map from '../../components/Map/Map'
import Header from '../../components/UI/Header/Header'
import ProfilePage from '../ProfilePage/Profile/ProfilePage'
import SearchPane from '../../containers/SearchPane/SearchPane'
import { handleLogOut } from '../../state/actions/userActions'
import useToggle from '../../snippets/useToggle'
import './MainPage.css'


const MainPage = (props) => {
        console.log(props)
        const [showProfile, toggleProfile] = useToggle();

        return (
            <div className="MainPage-header">
                <Header />
                {props.loggedIn ? null : <LoginPage />}
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