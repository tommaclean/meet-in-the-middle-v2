/* eslint-disable import/no-anonymous-default-export */
const defaultState = {
    searchResults: {},
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
        return {...state, searchResults: action.searchResults, loading: false}
    case 'GET_SEARCH_RESULTS_FAILURE':
        return action.error

    case 'SET_SELECTED_LOCATION_START':
        return {...state}
    case 'SET_SELECTED_LOCATION_SUCCESS':
        return {...state, selectedResult: action.selectedResult}
    case 'SET_SELECTED_LOCATION_FAILURE':
        return action.error

    default:
        return state
  }
}
