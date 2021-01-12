/* eslint-disable import/no-anonymous-default-export */
const defaultState = {
    currentUser: {
        username: ''
    }
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'USER_LOGIN_START':
        return {...state}
    case 'USER_LOGIN_SUCCESS':
        return {...state, currentUser: action.currentUser }
    case 'USER_LOGIN_FAILURE':
        return action.error

    default:
        return state
  }
}
