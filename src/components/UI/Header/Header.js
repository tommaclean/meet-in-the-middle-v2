import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import './Header.css'
import Button from '../Button/Button'
import { Link, useHistory } from 'react-router-dom';
import { handleLogOut } from '../../../state/actions/usersActions'
import { closeSelectedLocation, showSearchResults } from '../../../state/actions/searchResultsActions'

const Header = (props) => { 
    const history = useHistory()
    const dispatch = useDispatch()
  
    useEffect(() => {
     
    }, [])

    const clearToken = () => {
      localStorage.clear()
      props.handleLogOut()
      history.push('/login')
    }
    return (
      <header className="header-main">
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
            
            <Link to="/" onClick={() => dispatch(closeSelectedLocation())}>
              <Button>
                Home
              </Button>
            </Link>
            <div className="divider"></div>
            <div className="divider"></div>
            <Link to="/profile">
              <Button>
                Profile
              </Button>
            </Link>
            <div className="divider"></div>
            <div className="divider"></div>
            <div onClick={clearToken}>
              <Button>Log Out</Button>
            </div>
          </div>
      </header>
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