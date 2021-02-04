import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import './LoginPage.css'
import { connect } from 'react-redux'
import { handleLogin } from '../../state/actions/usersActions'


const LoginPage = (props) => {
    let history = useHistory()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
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
         <div className="center">
            <form onSubmit={handleLoginSubmission}>
                <p>Log In:</p>
                <input type="text" name="username" placeholder="User name" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" />
            </form>
            Need to sign up? Click <Link to="/signup">here.</Link>
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