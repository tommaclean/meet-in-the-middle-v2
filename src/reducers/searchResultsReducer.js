const defaultState = {
    searchResults: {}
}

export default (state = defaultState, action) => {

  switch (action.type) {
    case 'GET_SEARCH_RESULTS_SUCCESS':
        return {...state, searchResults: action.searchResults}
    case 'GET_SEARCH_RESULTS_FAILURE':
        return error
    default:
        return state
  }
}
