import { actions } from '../actions/meetupsActions'

const defaultState = {
    meetups: [],
    favMeetups: [],
    error: ''
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {

  switch (action.type) {
    case actions.GET_MEETUPS_SUCCESS:
        return {...state, meetups: action.meetups}
    case actions.GET_FAV_MEETUPS_SUCCESS:
        return {...state, favMeetups: action.favMeetups}
    case actions.SET_SHOW_PAST_MEETUPS_SUCCESS:
        return {...state, showPastMeetups: !state.showPastMeetups}
    case actions.SET_SHOW_FAV_MEETUPS_SUCCESS:
        return {...state, showFavMeetups: !state.showFavMeetups}
    case actions.FAVORITE_MEETUP_SUCCESS:
        return {...state, showPastMeetups: !state.showPastMeetups}
    case actions.SET_ERROR:
        return {...state, error: action.error}
    default:
        return state
  }
}
