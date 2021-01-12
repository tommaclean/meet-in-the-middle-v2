const defaultState = {
    meetups: [],
    showPastMeetups: false,
    favMeetups: []
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

    case 'GET_FAV_MEETUPS_START':
        return {...state};
    case 'GET_FAV_MEETUPS_SUCCESS':
        return {...state, favMeetups: action.favMeetups}
    case 'GET_FAV_MEETUPS_FAILURE':
        return action.error
        
    case 'CONFIRM_SELECTED_LOCATION_START':
        return {...state}
    case 'CONFIRM_SELECTED_LOCATION_SUCCESS':
        return {...state}
    case 'CONFIRM_SELECTED_LOCATION_FAILURE':
        return action.error

    case 'CONFIRM_FAV_MEETUP_START':
        return {...state}
    case 'CONFIRM_FAV_MEETUP_SUCCESS':
        return {...state}
    case 'CONFIRM_FAV_MEETUP_FAILURE':
        return action.error
    
    case 'SET_SHOW_PAST_MEETUPS_START':
        return {...state}
    case 'SET_SHOW_PAST_MEETUPS_SUCCESS':
        return {...state, showPastMeetups: !state.showPastMeetups}
    case 'SET_SHOW_PAST_MEETUPS_FAILURE':
        return action.error
    
    case 'SET_SHOW_FAV_MEETUPS_START':
        return {...state}
    case 'SET_SHOW_FAV_MEETUPS_SUCCESS':
        return {...state, showFavMeetups: !state.showFavMeetups}
    case 'SET_SHOW_FAV_MEETUPS_FAILURE':
        return action.error

    case 'FAVORITE_MEETUP_START':
        return {...state}
    case 'FAVORITE_MEETUP_SUCCESS':
        return {...state, showPastMeetups: !state.showPastMeetups}
    case 'FAVORITE_MEETUP_FAILURE':
        return action.error

    case 'CONFIRM_DELETE_FAV_MEETUP_START':
        return {...state}
    case 'CONFIRM_DELETE_FAV_MEETUP_SUCCESS':
        return {...state}
    case 'CONFIRM_DELETE_FAV_MEETUP_FAILURE':
        return action.error

    default:
        return state
  }
}
