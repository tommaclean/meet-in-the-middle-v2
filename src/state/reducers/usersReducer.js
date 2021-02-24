/* eslint-disable import/no-anonymous-default-export */
const defaultState = {
    currentUser: {
        id: null,
        username: null
    },
    loggedIn: false,
    token: ''
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'USER_SIGNUP_START':
        return {...state}
    case 'USER_SIGNUP_SUCCESS':
        return {...state, currentUser: action.currentUser, loggedIn: true, token: action.token }
    case 'USER_SIGNUP_FAILURE':
        return action.error

    case 'USER_LOGIN_START':
        return {...state}
    case 'USER_LOGIN_SUCCESS':
        return {...state, currentUser: action.currentUser, loggedIn: true, token: action.token }
    case 'USER_LOGIN_FAILURE':
        return action.error

    case 'GET_PROFILE_START':
        return {...state}
    case 'GET_PROFILE_SUCCESS':
        return {...state, currentUser: action.currentUser, loggedIn: true, token: action.token }
    case 'GET_PROFILE_FAILURE':
        return action.error

    case 'USER_LOGOUT_START':
        return {...state}
    case 'USER_LOGOUT_SUCCESS':
        return {...state, state: defaultState  }
    case 'USER_LOGOUT_FAILURE':
        return action.error

    default:
        return state
  }
}
