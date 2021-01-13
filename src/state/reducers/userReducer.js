/* eslint-disable import/no-anonymous-default-export */
const defaultState = {
    currentUser: {
        username: ''
    },
    loggedIn: false,
    page: 'main'
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'USER_LOGIN_START':
        return {...state}
    case 'USER_LOGIN_SUCCESS':
        return {...state, currentUser: action.currentUser, loggedIn: true }
    case 'USER_LOGIN_FAILURE':
        return action.error

    case 'GET_PROFILE_START':
        return {...state}
    case 'GET_PROFILE_SUCCESS':
        return {...state, currentUser: action.currentUser}
    case 'GET_PROFILE_FAILURE':
        return action.error

    case 'USER_LOGOUT_START':
        return {...state}
    case 'USER_LOGOUT_SUCCESS':
        return {...state, currentUser: null, loggedIn: false }
    case 'USER_LOGOUT_FAILURE':
        return action.error

    default:
        return state
  }
}
