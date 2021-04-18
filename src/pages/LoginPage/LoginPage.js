import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import './LoginPage.css'
import { connect } from 'react-redux'
import { handleLogin } from '../../state/actions/usersActions'


const LoginPage = (props) => {
    // let center = useRef(null)
    // let loginDiv = useRef(null)
    // let signupText = useRef(null)
    let history = useHistory()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

   
    useEffect(() => {
        // TweenMax.to(center, 0, {css: {visibility: 'visible'}})
        // TweenMax.to(loginDiv, .8, { opacity: 1, y: -50, ease: Power1.easeIn })
        // TweenMax.to(signupText, .8, { opacity: 1, y: 0, ease: Power1.easeIn })
        if (localStorage.token) {
            history.push('/main')
        }
    }, [history, localStorage.token])
    


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
        
            <div className="main">
                <h1 className="header">MeetInTheMiddle</h1>
                <div className="subheader">Find a place to meet up with two other people!</div>
                <p className="sign" align="center">Sign in</p>
                <form className="form1" onSubmit={handleLoginSubmission}>
                    <input className="un" type="text" align="center" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input className="pass" type="password" align="center" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <input type="submit" className="submit" />
                        
                </form>
                <div className="signup-text">
                    Need to sign up? Click <Link to="/signup">here.</Link>
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