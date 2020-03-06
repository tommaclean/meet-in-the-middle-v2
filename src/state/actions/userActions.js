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
                dispatch({ type: 'USER_LOGIN_SUCCESS', currentUser: {username: userInput.username} })
            } else {
                alert("Login failed")
                dispatch({ type: "USER_LOGIN_FAILURE" })
            }
        })
        .catch(error => {dispatch({ type: "USER_LOGIN_FAILURE", error: error });
    });


    //     .then((json) => {
    //     if (json.msg === 'success') { // response success checking logic could differ
    //       dispatch(setLoginState({ ...json, userId: username })); // our action is called here
    //     } else {
    //       Alert.alert('Login Failed', 'Username or Password is incorrect');
    //     }
    //   })
    //   .catch((err) => {
    //     Alert.alert('Login Failed', 'Some error occured, please retry');
    //     console.log(err);
    //   });
     
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
        headers: { 'Authorization': localStorage.token } 
    };

    return fetch("http://localhost:3000/profile", requestOptions)
        .then(response => response.json())
        .then(data => {dispatch({ type: 'GET_PROFILE_SUCCESS', username: data.username })})
        .catch(error => {dispatch({ type: "GET_PROFILE_FAILURE", error: error });});
}

export const handleLogOut = () => dispatch => {
    dispatch({ type: 'USER_LOGOUT_START'})
    localStorage.clear()
    dispatch({ type: 'USER_LOGOUT_SUCCESS', loggedIn: false })
}
    
    

   
