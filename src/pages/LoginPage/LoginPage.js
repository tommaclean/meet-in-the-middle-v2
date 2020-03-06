import React, { useState, useEffect } from 'react'
import './LoginPage.css'
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux'
import { handleLogin } from '../../state/actions/userActions'


const LoginPage = (props) => {
    const history = useHistory();

   useEffect(() => {
    if (props.loggedIn) {
        history.push('/main')
    }
   
   }, [history, props.loggedIn])
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

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
        <div className="center">
            <form onSubmit={handleLoginSubmission}>
                <p>Log In:</p>
                <input type="text" name="username" placeholder="User name" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" />
            </form>
        </div>
        )
}



const mapDispatchToProps = {
    handleLogin: handleLogin
 
}

const mapStateToProps = state => {
    return {
        loggedIn: state.user.loggedIn
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)