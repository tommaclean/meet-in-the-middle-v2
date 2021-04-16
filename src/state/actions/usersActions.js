export const actions = {
    USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS'
}





const setLoggedInUser = () => ({ type: actions.USER_LOGIN_SUCCESS, token: localStorage.token })



export const handleLogin = (userInput) => async (dispatch) => {
        let requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json' 
        },
        body: JSON.stringify({ "username": userInput.username, "password": userInput.password })
        };
        // const proxyURL = 'https://thingproxy.freeboard.io/fetch/'
        const fetchURL = 'https://meet-in-the-middle-back-end.herokuapp.com/login'

        try {
            const loggedInData = await fetch(fetchURL, requestOptions).then(res => res.json())
            .then(data => {
                if (data.token) {
                    console.log("LoggedIn Data: ", data)
                    localStorage.token = data.token
                    dispatch(setLoggedInUser(loggedInData))
                }
            })
            
        } catch (e) {
            alert("Login failed. Username or password incorrect.")
        }
     
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

export const getProfile = () => async (dispatch) => {
    let requestOptions = {
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json', 
            'Authorization': localStorage.token 
        }
    };
        const fetchURL = 'https://meet-in-the-middle-back-end.herokuapp.com/profile'
        try {
            const userInfo = await fetch(fetchURL, requestOptions).then(res => res.json())
            console.log("userInfo: ", userInfo)
        } catch (e) {
            console.log("getProile error: ", e)
        }
        // fetch(fetchURL, requestOptions).then(response => console.log("getProfile res: ", response))
        // .then(data => {
        //         dispatch({ type: 'GET_PROFILE_SUCCESS', currentUser: {username: data.username, id: data.id }, token: localStorage.token })  
        //     } 
        // )
        // .catch(error => {dispatch({ type: "GET_PROFILE_FAILURE", error: error });});
}

export const handleLogOut = () => dispatch => {
    dispatch({ type: 'USER_LOGOUT_START'})
    localStorage.clear()
    dispatch({ type: 'USER_LOGOUT_SUCCESS', loggedIn: false })
}
    

   
