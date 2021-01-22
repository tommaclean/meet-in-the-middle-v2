/* eslint-disable import/no-anonymous-default-export */
const defaultState = {
    markers: {}
}

export default (state = defaultState, action) => {

    switch (action.type) {
        
      case 'SET_MARKERS_START':
          return {...state};
      case 'SET_MARKERS_SUCCESS':
          return {...state, markers: action.markers}
      case 'SET_MARKERS_FAILURE':
          return action.error
  
      default:
          return state
    }
  }