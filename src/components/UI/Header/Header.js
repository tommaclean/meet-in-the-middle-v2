import React, { useRef, useEffect } from 'react'
import { TweenMax, Power3 } from 'gsap'
import { connect } from 'react-redux'
import './Header.css'
import { Link, useHistory } from 'react-router-dom';
import { handleLogOut } from '../../../state/actions/usersActions'

const Header = (props) => { 
    const history = useHistory()
    let homeCircle = useRef(null)
    let logoutCircle = useRef(null)
    let profileCircle = useRef(null)
    let headerLinks = useRef(null)

    const handleHeaderMouseOver = () => {
      TweenMax.to(homeCircle, .4, {width: 80, height: 80, ease: Power3.easeOut})
    }

    const handleHeaderMouseLeave = () => {
      TweenMax.to(homeCircle, .4, {width: 75, height: 75, ease: Power3.easeOut})
    }

    useEffect(() => {
      TweenMax.to(headerLinks, 0, {css: {visibility: 'visible'}})
      TweenMax.from(logoutCircle, .8, {opacity: 0, x: 40, ease: Power3.easeOut, delay: .2})
      TweenMax.from(homeCircle, .8, {opacity: 0, x: 0, ease: Power3.easeOut})
      TweenMax.from(profileCircle, .8, {opacity: 0, x: -40, ease: Power3.easeOut, delay: .2})
    }, [])

    const clearToken = () => {
      localStorage.clear()
      props.handleLogOut()
      history.push('/login')
    }
    return (
      <div>
        <div className="header">
            <h4>MeetInTheMiddle</h4> 
        </div>
          <div className="header-links" ref={el => headerLinks = el}>
            <button ref={el => profileCircle = el} className="circle blue a"><Link to="/profile">Profile</Link></button>
            <button onMouseOver={handleHeaderMouseOver} onMouseLeave={handleHeaderMouseLeave} ref={el => homeCircle = el} className="circle a"><Link to="/">Home</Link></button>
            <button ref={el => logoutCircle = el} className="circle green a"onClick={() => clearToken()}>Log Out</button>
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
    currentUsername: state.users.currentUser.username
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)