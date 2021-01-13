export const handleLogin = (userInput) => dispatch => {
    dispatch({ type: 'USER_LOGIN_START' })
        let requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({"username": userInput.username, "password": userInput.password})
        };

        return fetch("http://localhost:3000/login", requestOptions)
        .then(response => response.json())
        .then(data => {
            if (data.token) {
                localStorage.token = data.token
            }
        })
        .then(() => {dispatch({ type: 'USER_LOGIN_SUCCESS', currentUser: {username: userInput.username} })})
        .catch(error => {
            dispatch({ type: "USER_LOGIN_FAILURE", error: error });
        });
     
};

export const handleSignup = (userInput) => dispatch => {
    dispatch({ type: 'USER_SIGNUP_START' })
        let requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({"username": userInput.username, "password": userInput.password})
        };

        return fetch("http://localhost:3000/login", requestOptions)
        .then(response => response.json())
        .then(data => {
            if (data.token) {
                localStorage.token = data.token
            }
        })
        .then(() => {dispatch({ type: 'USER_SIGNUP_SUCCESS', currentUser: {username: userInput.username} })})
        .catch(error => {
            dispatch({ type: "USER_SIGNUP_FAILURE", error: error });
        });
     
};

export const getProfile = () => dispatch => {
    dispatch({ type: 'GET_PROFILE_START' })
    let requestOptions = {
        headers: { 'Authorization': `Bearer ${localStorage.token}` }
    };

    return fetch("http://localhost:3000/profile", requestOptions)
        .then(response => response.json())
        .then(data => {dispatch({ type: 'GET_PROFILE_SUCCESS', userData: data })})
        .catch(error => {dispatch({ type: "GET_PROFILE_FAILURE", error: error });});
}

export const handleLogOut = () => dispatch => {
    dispatch({ type: 'USER_LOGOUT_START'})
    localStorage.clear()
    dispatch({ type: 'USER_LOGOUT_SUCCESS', loggedIn: false })
}
    
    

   
