/* eslint-disable import/no-anonymous-default-export */
const defaultState = {
    searchResults: {},
    midpoint: { lat: 40.7019763,
                lng: -73.9972181},
    selectedResult: {},
    loading: false,
    showSelectedLocation: false,
    confirmSelection: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_SEARCH_RESULTS_START':
        return {...state, loading: true}
    case 'GET_SEARCH_RESULTS_SUCCESS':
        return {...state, searchResults: action.searchResults, loading: true}
    case 'GET_SEARCH_RESULTS_FAILURE':
        return action.error

    case 'SET_SELECTED_LOCATION_START':
        return {...state}
    case 'SET_SELECTED_LOCATION_SUCCESS':
        return {...state, selectedResult: action.selectedResult, showSelectedLocation: true }
    case 'SET_SELECTED_LOCATION_FAILURE':
        return action.error

    case 'SET_MIDPOINT_START':
        return {...state}
    case 'SET_MIDPOINT_SUCCESS':
        console.log(action)
        return {...state, midpoint: action.midpoint }
    case 'SET_MIDPOINT_FAILURE':
        return action.error

    default:
        return state
  }
}
