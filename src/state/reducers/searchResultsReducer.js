/* eslint-disable import/no-anonymous-default-export */
const defaultState = {
    searchResults: {},
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
    case 'GET_SEARCH_RESULTS_START':
        return {...state, loading: true}
    case 'GET_SEARCH_RESULTS_SUCCESS':
        return {...state, searchResults: action.searchResults, showSearchResults: true, loading: false }
    case 'GET_SEARCH_RESULTS_FAILURE':
        return action.error

    case 'SHOW_FORM_INPUT_START':
        return {...state}
    case 'SHOW_FORM_INPUT_SUCCESS':
        return {...state, showFormInput: false }
    case 'SHOW_FORM_INPUT_FAILURE':
        return action.error

    case 'SET_SELECTED_LOCATION_START':
        return {...state}
    case 'SET_SELECTED_LOCATION_SUCCESS':
        return {...state, selectedResult: action.selectedResult, showSelectedLocation: true }
    case 'SET_SELECTED_LOCATION_FAILURE':
        return action.error

    case 'CLOSE_SELECTED_LOCATION_SUCCESS':
        return {...state, showSelectedLocation: false, showFormInput: true, showSearchResults: false, searchResults: {} }
    
    case 'SHOW_SEARCH_RESULTS_START':
        return {...state}
    case 'SHOW_SEARCH_RESULTS_SUCCESS':
        return {...state, showSearchResults: true, showSelectedLocation: true, showFormInput: false  }
    case 'SHOW_SEARCH_RESULTS_FAILURE':
        return action.error

    case 'SET_MIDPOINT_START':
        return {...state}
    case 'SET_MIDPOINT_SUCCESS':
        return {...state, midpoint: action.midpoint }
    case 'SET_MIDPOINT_FAILURE':
        return action.error

    case 'CLEAR_SEARCH_RESULTS_START':
        return {...state}
    case 'CLEAR_SEARCH_RESULTS_SUCCESS':
        return {...state, searchResults: {}, selectedResult: {}, showSearchResults: false, showSelectedLocation: false, midpoint: null }
    case 'CLEAR_SEARCH_RESULTS_FAILURE':
            return action.error

    default:
        return state
  }
}
