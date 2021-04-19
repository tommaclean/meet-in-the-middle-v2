import React, { useState, useEffect } from 'react'
import './SignupPage.css'
import { useHistory, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleSignup } from '../../state/actions/usersActions'


const SignupPage = (props) => {
    let history = useHistory()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        if (localStorage.token || props.loggedIn) {
            history.push('/main')
        }
    }, [history, props.loggedIn])

    const handleSignupSubmission = (e) => {
        e.preventDefault()
        props.handleSignup({
            "username": username,
            "password": password
        }).then(history.push('/main'))
        setUsername('')
        setPassword('')
        
    }
    

    return (
        <div className="main">
            <h1 className="header">MeetInTheMiddle</h1>
            <div className="subheader">Find a place to meet up with two other people!</div>
            <p className="sign" align="center">Sign Up!</p>
            <form className="form1" onSubmit={handleSignupSubmission}>
                <input className="un" type="text" align="center" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input className="pass" type="password" align="center" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input type="submit" className="submit" />
                    
            </form>
            <div className="signup-text">
                Log in instead? Click <Link to="/login">here.</Link>
            </div>        
        </div>
    
        )
}



const mapDispatchToProps = {
    handleSignup: handleSignup
 
}

const mapStateToProps = state => {
    return {
        loggedIn: state.users.loggedIn,
        token: state.users.token
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage)