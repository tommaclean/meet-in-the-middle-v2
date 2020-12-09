const defaultState = {
    address1Coor: [],
    address2Coor: [],
    address3Coor: [],
    lats: [],
    lngs: [],
    midpoint: [],
    midpointAddress: "",
    openConfirmationModal: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {

  switch (action.type) {
    case 'GET_SEARCH_RESULTS_SUCCESS':
        return action.searchresults;
    case 'GET_MEETUPS_SUCCESS':
        return action.meetups
    case 'GET_MEETUPS_SEARCH_SUCCESS':
        return action.meetups
    default:
        return state
  }
}