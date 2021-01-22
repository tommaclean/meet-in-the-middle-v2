import React from 'react'
import { connect } from 'react-redux'
import './Header.css'
import { Link, useHistory } from 'react-router-dom';
import { handleLogOut } from '../../../state/actions/usersActions'

const Header = (props) => { 
    const history = useHistory()

    const clearToken = () => {
      localStorage.clear()
      props.handleLogOut()
      history.push('/login')
    }
    return (
      <div>
        <div className="header">
            MeetInTheMiddle 
        </div>
          <div>
            <button><Link to="/">Home</Link></button>
            <button onClick={() => clearToken()}>Log Out</button>
            <button><Link to="/profile">Profile</Link></button>
            <h4>Welcome, {props.currentUsername}</h4>
          </div>
      </div>
    )
}

const mapDispatchToProps = {
  handleLogOut: handleLogOut
}

const mapStateToProps = state => {
  return {
    currentUsername: state.user.currentUser.username
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)