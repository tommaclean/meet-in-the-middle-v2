/* eslint-disable import/no-anonymous-default-export */
import { actions } from '../actions/searchResultsActions'

const defaultState = {
    searchResults: [],
    showSearchResults: false,
    midpoint: { lat: 40.7019763,
                lng: -73.9972181},
    selectedResult: {},
    loading: false,
    showSelectedLocation: false,
    confirmSelection: false,
    showFormInput: true
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actions.GET_SEARCH_RESULTS_START:
        return {...state, loading: true }
    case actions.GET_SEARCH_RESULTS_SUCCESS:
        return {...state, searchResults: action.searchResults, showSearchResults: true, loading: false }
    case actions.GET_SEARCH_RESULTS_FAILURE:
        return action.error

    case actions.SHOW_FORM_INPUT_SUCCESS:
        return {...state, showFormInput: false }
    case actions.SHOW_FORM_INPUT_FAILURE:
        return action.error

    case actions.SET_SELECTED_LOCATION_SUCCESS:
        return {...state, selectedResult: action.selectedResult, showSelectedLocation: true }
    case actions.SET_SELECTED_LOCATION_FAILURE:
        return action.error

    case actions.CLOSE_SELECTED_LOCATION_SUCCESS:
        return {...state, showSelectedLocation: false, showFormInput: true, showSearchResults: false, searchResults: [] }
    
    case actions.SHOW_SEARCH_RESULTS_SUCCESS:
        return {...state, showSearchResults: true, showSelectedLocation: true, showFormInput: false  }
    case actions.SHOW_SEARCH_RESULTS_FAILURE:
        return action.error

    case actions.SET_MIDPOINT_SUCCESS:
        return {...state, midpoint: action.midpoint }
    case actions.SET_MIDPOINT_FAILURE:
        return action.error
    // case actions.CLEAR_PAST_MEETUP_MARKERS_SUCCESS:
    //     return {...state, searchResults: [] }
    case actions.CLEAR_SEARCH_RESULTS_SUCCESS:
        return {...state, searchResults: [], selectedResult: {}, showSearchResults: false, showSelectedLocation: false, midpoint: null }
    case actions.CLEAR_SEARCH_RESULTS_FAILURE:
            return action.error

    default:
        return state
  }
}
