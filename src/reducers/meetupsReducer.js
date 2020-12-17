const defaultState = {
    meetups: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {

  switch (action.type) {
    case 'GET_MEETUPS_START':
        return {...state};
    case 'GET_MEETUPS_SUCCESS':
        return {...state, meetups: action.meetups, loading: false}
    case 'GET_MEETUPS_FAILURE':
        return action.error
    case 'CONFIRM_SELECTED_LOCATION_START':
        return {...state}
    case 'CONFIRM_SELECTED_LOCATION_SUCCESS':
        return {...state, meetups: action.meetup}
    case 'CONFIRM_SELECTED_LOCATION_FAILURE':
        return action.error
    default:
        return state
  }
}
