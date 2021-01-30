export const handleLogin = (userInput, props) => dispatch => {
    dispatch({ type: 'USER_LOGIN_START' })
        let requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({"username": userInput.username, "password": userInput.password})
        };

        return fetch("http://localhost:3000/login", requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log("Login data", data)
            if (data.token) {
                localStorage.token = data.token
                dispatch({ type: 'USER_LOGIN_SUCCESS', currentUser: {username: data.username, id: data.user_id }, token: localStorage.token })  
            } else {
                alert('Login Failed', 'Username or Password is incorrect');
              }
        })
        .catch(error => {
            alert("Login failed. Username or password incorrect.")
            dispatch({ type: "USER_LOGIN_FAILURE", error: error });
        });
     
};

export const handleSignup = (userInput) => dispatch => {
    console.log(userInput)
    dispatch({ type: 'USER_SIGNUP_START' })
        let requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json', 
        },
        body: JSON.stringify({
            username: userInput.username, password: userInput.password})
        };

        return fetch("http://localhost:3000/signup", requestOptions)
        .then(response => response.json())
        .then(data => { 
            if (data.token) {
                localStorage.token = data.token
                dispatch({ type: 'USER_SIGNUP_SUCCESS', currentUser: {username: userInput.username} })
            }
        })
        .catch(error => {
            alert("Signup failed.")
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
        .then(data => {
                console.log("getProfile:", data)
                dispatch({ type: 'GET_PROFILE_SUCCESS', currentUser: {username: data.username, id: data.id }, token: localStorage.token })  
            } 
        )
        .catch(error => {dispatch({ type: "GET_PROFILE_FAILURE", error: error });});
}

export const handleLogOut = () => dispatch => {
    dispatch({ type: 'USER_LOGOUT_START'})
    localStorage.clear()
    dispatch({ type: 'USER_LOGOUT_SUCCESS', loggedIn: false })
}
    

   
