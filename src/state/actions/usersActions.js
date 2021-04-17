export const userActions = {
    USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    GET_PROFILE_SUCCESS: 'GET_PROFILE_SUCCESS',
    SET_ERROR: 'SET_ERROR'
}

export const actionLog = action => ({
    type: action
  })


const setLoggedInUser = (loggedInData) => ({ 
    type: userActions.USER_LOGIN_SUCCESS, currentUser: {username: loggedInData.username, id: loggedInData.user_id }, token: loggedInData.token })



export const handleLogin = (userInput) => async (dispatch) => {
        console.log("userInput: ", userInput)
        let requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json' 
        },
        body: JSON.stringify({ "username": userInput.username, "password": userInput.password })
        };
        // const proxyURL = 'https://thingproxy.freeboard.io/fetch/'
        const fetchURL = 'http://localhost:3000/login'

        try {
            const loggedInData = await fetch(fetchURL, requestOptions).then(res => res.json())
            console.log('loggedInData: ', loggedInData)
            if (loggedInData.token) {
                localStorage.token = loggedInData.token
                dispatch(setLoggedInUser(loggedInData))
                dispatch(getProfile(localStorage.token))
            }
        } catch (e) {
            dispatch(actionLog(userActions.SET_ERROR(e)))
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

        return fetch("https://cors-anywhere.herokuapp.com/http://localhost:3000/signup", requestOptions)
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

const setProfileInfo = (userInfo) => ({ type: userActions.GET_PROFILE_SUCCESS, currentUser: userInfo.currentUser, token: userInfo.token })

export const getProfile = (token) => async (dispatch) => {
    console.log("getProfile", localStorage.token)
    let requestOptions = {
        headers: { 
            // 'Content-Type': 'application/json',
            // 'Accept': 'application/json', 
            'Authorization': `Bearer ${token}` 
        }
    };
        const fetchURL = 'http://localhost:3000/profile'
        try {
            const userInfo = await fetch(fetchURL, requestOptions).then(res => res.json()).then(data => dispatch(setProfileInfo(data)))
            console.log("userInfo: ", userInfo)
        } catch (e) {
            alert("Profile fetch failed")
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
    

   
