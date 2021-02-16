import React, { useState, useEffect, useRef } from 'react'
import { useHistory, Link } from 'react-router-dom'
import './LoginPage.css'
import { connect } from 'react-redux'
import { handleLogin } from '../../state/actions/usersActions'
import { TweenMax, Power1, Power0 } from 'gsap'

const LoginPage = (props) => {
    let center = useRef(null)
    let loginDiv = useRef(null)
    let signupText = useRef(null)
    let history = useHistory()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

   
    useEffect(() => {
        TweenMax.to(center, 0, {css: {visibility: 'visible'}})
        TweenMax.to(loginDiv, .8, { opacity: 1, y: -50, ease: Power1.easeIn })
        TweenMax.to(signupText, .8, { opacity: 1, y: 20, ease: Power1.easeIn })
        if (localStorage.token) {
            history.push('/main')
        }
    }, [localStorage.token])
    


    const handleLoginSubmission = (e) => {
        e.preventDefault()
        props.handleLogin({
            "username": username,
            "password": password
        })
        setUsername('')
        setPassword('')
    }

    return (
        <div className="login" ref={el => {center = el}}>
            <div className="loginDiv" ref={el => {loginDiv = el}}>
            <h2>Meet In The Middle</h2>
                <div className="signup-text" ref={el => {signupText = el}}>
                    Need to sign up? Click <Link to="/signup">here.</Link>
                </div>
                <form onSubmit={handleLoginSubmission}>
                    <p>Log In:</p>
                    <input type="text" name="username" placeholder="User name" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input type="submit" />
                </form>
            </div>
            
        </div>
     
        
        )
}



const mapDispatchToProps = {
    handleLogin: handleLogin
}

const mapStateToProps = state => {
    return {
        loggedIn: state.users.loggedIn,
        token: state.users.token
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)