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
        if (localStorage.token) {
            history.push('/main')
        }
    }, [localStorage.token])

    const handleSignupSubmission = (e) => {
        e.preventDefault()
        props.handleSignup({
            "username": username,
            "password": password
        })
        setUsername('')
        setPassword('')
    }

    return (

        <div>
            <div className="header">
                MeetInTheMiddle 
            </div>
        <div className="center">
            <form onSubmit={handleSignupSubmission}>
                Sign Up:
                <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" />
            </form>
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
        loggedIn: state.user.loggedIn,
        token: state.user.token
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage)