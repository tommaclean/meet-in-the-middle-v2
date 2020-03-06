import React from 'react'
import { connect } from 'react-redux'
import classes from '../Header/Header.module.css'
import { Link } from 'react-router-dom';
import { handleLogOut } from '../../../state/actions/userActions'

const Header = (props) => { 
    return (
        <div className={classes.header}>
            <Link to="/main">MeetInTheMiddle</Link> 
            <button onClick={props.handleLogOut}>Log Out</button>
            <Link to="/profile">Profile</Link>
        </div>
    )
}

const mapDispatchToProps = {
  handleLogOut: handleLogOut
}

export default connect(null, mapDispatchToProps)(Header)