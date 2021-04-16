export const handleLogin = (userInput) => async (dispatch) => {
    dispatch({ type: 'USER_LOGIN_START' })
        let requestOptions = {
        method: 'POST',
        mode: 'no-cors',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json' 
        },
        body: JSON.stringify({ "username": userInput.username, "password": userInput.password })
        };
        const proxyURL = 'https://thingproxy.freeboard.io/fetch/'
        const fetchURL = 'https://meet-in-the-middle-back-end.herokuapp.com/login'

        try {
            fetch(proxyURL + fetchURL, requestOptions).then(response => response.text()).then(text => console.log("text: ", text))
        } catch (e) {
            alert("Login failed. Username or password incorrect.")
        }

        
        
        //     data => {
        //     if (data.token) {
        //         localStorage.token = data.token
        //         dispatch({ type: 'USER_LOGIN_SUCCESS', currentUser: {username: data.username, id: data.user_id }, token: localStorage.token })  
        //     } else {
        //         alert('Login Failed', 'Username or Password is incorrect');
        //       }
        // }
        // )
        // .catch(error => {
        //     alert("Login failed. Username or password incorrect.")
        //     dispatch({ type: "USER_LOGIN_FAILURE", error: error });
        // });
     
};

export const handleSignup = (userInput) => dispatch => {

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

        return fetch("https://cors-anywhere.herokuapp.com/https://meet-in-the-middle-back-end.herokuapp.com/signup", requestOptions)
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
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json', 
            'Authorization': localStorage.token 
        }
    };
    const proxyURL = 'https://thingproxy.freeboard.io/fetch/'
        const fetchURL = 'https://meet-in-the-middle-back-end.herokuapp.com/profile'
        return fetch(proxyURL + fetchURL, requestOptions)
        .then(response => console.log("getProfile res: ", response))
        .then(data => {
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
    

   
