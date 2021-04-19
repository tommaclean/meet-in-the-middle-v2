

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
            
            if (loggedInData.token) {
                localStorage.token = loggedInData.token
                getProfile()
                dispatch(setLoggedInUser(loggedInData))
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

        return fetch("https://meet-in-the-middle-back-end.herokuapp.com/signup", requestOptions)
        .then(response => response.json())
        .then(data => { 
            if (data.token) {
                localStorage.token = data.token
                dispatch({ type: 'USER_SIGNUP_SUCCESS', currentUser: {username: userInput.username}, loggeIn: true })
                
            }
        })
        .catch(error => {
            alert("Signup failed.")
            dispatch({ type: "USER_SIGNUP_FAILURE", error: error });
        });
     
};

const setProfileInfo = (userInfo) => ({ type: userActions.GET_PROFILE_SUCCESS, currentUser: {username: userInfo.username, id: userInfo.id }, token: localStorage.token })

export const getProfile = () => async (dispatch) => {
    
    let requestOptions = {
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json', 
            'Authorization': `Bearer ${localStorage.token}` 
        }
    };
        const fetchURL = 'https://meet-in-the-middle-back-end.herokuapp.com/profile'
        try {
            const userInfo = await fetch(fetchURL, requestOptions).then(res => res.json())
           
            dispatch(setProfileInfo(userInfo))
        } catch (e) {
            alert("Profile fetch failed")
        }
        
}

export const handleLogOut = () => dispatch => {
    dispatch({ type: 'USER_LOGOUT_START'})
    localStorage.clear()
    dispatch({ type: 'USER_LOGOUT_SUCCESS', loggedIn: false })
}
    

   
