import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import './Header.css'
import Button from '../Button/Button'
import { Link, useHistory } from 'react-router-dom';
import { handleLogOut } from '../../../state/actions/usersActions'

const Header = (props) => { 
    const history = useHistory()

  
    useEffect(() => {
     
    }, [])

    const clearToken = () => {
      localStorage.clear()
      props.handleLogOut()
      history.push('/login')
    }
    return (
      <div className="header-main">
          <div className="title">
              MeetInTheMiddle
              <div className="greeting">Welcome, {props.currentUsername}!  </div>
          </div>
          <div className="divider"></div>
          <div className="divider"></div>
          <div className="divider"></div>
          <div className="divider"></div>
          <div className="divider"></div>
          <div className="divider"></div>
          <div className="divider"></div>
          <div className="divider"></div>
          <div className="buttons">
            <Link to="/profile">
              <Button>
                Profile
              </Button>
            </Link>
            <Link to="/">
              <Button>
                Home
              </Button>
            </Link>
            <div onClick={clearToken}>
              <Button>Log Out</Button>
            </div>
          </div>
      </div>
    )
}

const mapDispatchToProps = {
  handleLogOut: handleLogOut
}

const mapStateToProps = state => {
  return {
    currentUsername: state.users.currentUser.username
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)