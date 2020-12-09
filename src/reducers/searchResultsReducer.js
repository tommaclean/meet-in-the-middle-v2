/* eslint-disable import/no-anonymous-default-export */
const defaultState = {
    searchResults: {}
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_SEARCH_RESULTS_SUCCESS':
        return {...state, searchResults: action.searchResults}
    case 'GET_SEARCH_RESULTS_FAILURE':
        return action.error
    default:
        return state
  }
}
