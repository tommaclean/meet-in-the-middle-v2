import React, { useState } from 'react'
import { connect } from 'react-redux'
import { handleSignup } from '../../state/actions/userActions'


const LoginPage = ({ handleSignup }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSignupSubmission = (e) => {
        e.preventDefault()
        handleSignup({
            "username": username,
            "password": password
        })
        setUsername('')
        setPassword('')
    }

    return (
        <form onSubmit={handleSignupSubmission}>
            Sign Up:
            <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="submit" />
        </form>
        )
}



const mapDispatchToProps = {
    handleSignup: handleSignup
 
}

export default connect(null, mapDispatchToProps)(LoginPage)