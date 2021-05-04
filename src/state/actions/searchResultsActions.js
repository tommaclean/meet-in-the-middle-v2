import Geocode from 'react-geocode';
import { clearPastMeetupMarkers } from '../actions/meetupsActions'

export const actions = {
  SET_MIDPOINT_SUCCESS: 'SET_MIDPOINT_SUCCESS',
  GET_SEARCH_RESULTS_START: 'GET_SEARCH_RESULTS_START',
  GET_SEARCH_RESULTS_SUCCESS: 'GET_SEARCH_RESULTS_SUCCESS',
  SET_SELECTED_LOCATION_SUCCESS: 'SET_SELECTED_LOCATION_SUCCESS',
  CLOSE_SELECTED_LOCATION_SUCCESS: 'CLOSE_SELECTED_LOCATION_SUCCESS',
  CLEAR_SEARCH_RESULTS_SUCCESS: 'CLEAR_SEARCH_RESULTS_SUCCESS',
  SHOW_SEARCH_RESULTS_SUCCESS: 'SHOW_SEARCH_RESULTS_SUCCESS',
  SET_ERROR: 'SET_ERROR'

}

export const actionLog = action => ({
  type: action
})

export const handleAddressSubmit = ({address1, address2, address3}) => dispatch => {
  // Empty latitude and longitude arrays to later find the average (midpoint)
  Geocode.setApiKey(process.env.REACT_APP_GOOGLE_KEY)
  let lats = []
  let lngs = []
  
  // Takes each address and uses Geocode to convert to coordinates
  // Address 1
  let promise1 = Geocode.fromAddress(address1).then(
    response => {
      const { lat, lng } = response.results[0].geometry.location;
      let lat1 = lat
      let lng1 = lng
      lats = [...lats, lat1]
      lngs = [...lngs, lng1]
    },
    error => {
      alert(error, "Error with Address 1");
    }
    );
  
  // Address 2 
  let promise2 = Geocode.fromAddress(address2).then(
    response => {
      const { lat, lng } = response.results[0].geometry.location;
      let lat2 = lat
      let lng2 = lng
      lats = [...lats, lat2]
      lngs = [...lngs, lng2]
    },
    error => {
      alert(error, "Error with Address 2");
    }
    );
  
  // Address 3
  let promise3 = Geocode.fromAddress(address3).then(
    response => {
      const { lat, lng } = response.results[0].geometry.location;
      let lat3 = lat
      let lng3 = lng
      lats = [...lats, lat3]
      lngs = [...lngs, lng3]
    },
    error => {
      alert(error, "Error with Address 3");
    }
    );
        
    // Once all promises have returned, then the latitudes and longitutes are sent to handleMidpointCalculation find the midpoint
    Promise.all([promise1, promise2, promise3]).then(() => handleMidpointCalculation(lats, lngs, dispatch))
        
}
        
const handleMidpointCalculation = (lats, lngs, dispatch) => {
  // Finding the average of the latitudes 
  let latSum = lats.reduce((previous, current) => current += previous);
  let latAvg = latSum / 3;
  
  // Finding the average of the longitudes
  let lngSum = lngs.reduce((previous, current) => current += previous);
  let lngAvg = lngSum / 3;
  let coordinates = [latAvg, lngAvg]

  // Send the average latitude and longitude to the Google Maps API
  dispatch(handlePlacesFetch(coordinates, dispatch))
    try{
      dispatch({ type: actions.SET_MIDPOINT_SUCCESS, midpoint: { lat: coordinates[0], lng: coordinates[1] }})
    } catch (error) {
      dispatch({ type: 'SET_MIDPOINT_FAILURE', error: error })
  }
    
}

const setSearchResults = (searchResults) => ({ type: actions.GET_SEARCH_RESULTS_SUCCESS, searchResults: searchResults.results })


const handlePlacesFetch = (coordinates) => async (dispatch) => {
  
  dispatch({ type: actions.GET_SEARCH_RESULTS_START })
  const corStr = coordinates.toString()
  const apiKey = process.env.REACT_APP_GOOGLE_KEY
  const googleURL = `https://secret-bayou-02815.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${corStr}&radius=1500&types=bar&key=${apiKey}`
 
  try {
    await fetch(googleURL).then(res => res.json()).then(searchResults => {  
        dispatch(setSearchResults(searchResults))
      })
  } catch (e) {
    dispatch(actionLog(actions.SET_ERROR))
  }

};


export const handleLocationSelection = (searchResult) => dispatch => {
    try{
      dispatch({ type: actions.SET_SELECTED_LOCATION_SUCCESS, selectedResult: searchResult })
    } catch (e) {
      dispatch(actionLog(actions.SET_ERROR))
  }
}

export const closeSelectedLocation = () => dispatch => {
    try{
      dispatch({ type: actions.CLOSE_SELECTED_LOCATION_SUCCESS })
      dispatch(clearPastMeetupMarkers())
    } catch (e) {
      dispatch(actionLog(actions.SET_ERROR))
  }
}

export const clearSearchResults = () => dispatch => {
    try{
      dispatch({ type: actions.CLEAR_SEARCH_RESULTS_SUCCESS })
    } catch (error) {
      dispatch(actionLog(actions.SET_ERROR))
  }
}

export const showSearchResults = () => dispatch => {
    try{
      dispatch({ type: actions.SHOW_SEARCH_RESULTS_SUCCESS })
    } catch (error) {
      dispatch(actionLog(actions.SET_ERROR))
  }
}

