const defaultState = {
    meetups: [],
    showPastMeetups: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {

  switch (action.type) {
    case 'GET_MEETUPS_START':
        return {...state};
    case 'GET_MEETUPS_SUCCESS':
        return {...state, meetups: action.meetups}
    case 'GET_MEETUPS_FAILURE':
        return action.error
        
    case 'CONFIRM_SELECTED_LOCATION_START':
        return {...state}
    case 'CONFIRM_SELECTED_LOCATION_SUCCESS':
        console.log('CONFIRM_SELECTED_LOCATION_SUCCESS', action.meetup)
        return {...state, meetup: action.meetup, showPastMeetups: true}
    case 'CONFIRM_SELECTED_LOCATION_FAILURE':
        return action.error

    case 'SET_SHOW_PAST_MEETUPS_START':
        return {...state}
    case 'SET_SHOW_PAST_MEETUPS_SUCCESS':
        return {...state, showPastMeetups: !state.showPastMeetups}
    case 'SET_SHOW_PAST_MEETUPS_FAILURE':
        return action.error
    default:
        return state
  }
}
