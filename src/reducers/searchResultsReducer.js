const defaultState = {
    address1Coor: [],
    address2Coor: [],
    address3Coor: [],
    lats: [],
    lngs: [],
    midpoint: [],
    midpointAddress: "",
    openConfirmationModal: false,
    searchResults: {}
}

// eslint-disable-next-line import/no-anonymous-default-export
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
