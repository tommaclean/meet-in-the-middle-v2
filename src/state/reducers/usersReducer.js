/* eslint-disable import/no-anonymous-default-export */
import { userActions } from '../actions/usersActions'

const defaultState = {
    currentUser: {
        id: null,
        username: null
    },
    loggedIn: false,
    token: '',
    error: null
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case userActions.USER_SIGNUP_START:
        return {...state}
    case userActions.USER_SIGNUP_SUCCESS:
        return {...state, currentUser: action.currentUser, loggedIn: true, token: action.token }
    case userActions.USER_SIGNUP_FAILURE:
        return action.error

    case userActions.USER_LOGIN_START:
        return {...state}
    case userActions.USER_LOGIN_SUCCESS:
        return {...state, token: action.token, loggedIn: true }
    case userActions.USER_LOGIN_FAILURE:
        return {...state, error: action.error}

    case userActions.GET_PROFILE_START:
        return {...state}
    case userActions.GET_PROFILE_SUCCESS:
        return {...state, currentUser: action.currentUser, loggedIn: true, token: action.token }
    case userActions.GET_PROFILE_FAILURE:
        return action.error

    case userActions.USER_LOGOUT_START:
        return {...state}
    case userActions.USER_LOGOUT_SUCCESS:
        return {...state, state: defaultState  }
    case userActions.USER_LOGOUT_FAILURE:
        return action.error

    default:
        return state
  }
}
