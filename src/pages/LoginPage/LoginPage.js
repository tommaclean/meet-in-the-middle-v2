import React, { useState } from 'react'
import { connect } from 'react-redux'
import { handleLogin } from '../../state/actions/userActions'


const LoginPage = ({ handleLogin }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLoginSubmission = (e) => {
        e.preventDefault()
        handleLogin({
            "username": username,
            "password": password
        })
        setUsername('')
        setPassword('')
    }

    return (
        <form onSubmit={handleLoginSubmission}>
            <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="submit" />
        </form>
        )
}



const mapDispatchToProps = {
    handleLogin: handleLogin
 
}

export default connect(null, mapDispatchToProps)(LoginPage)