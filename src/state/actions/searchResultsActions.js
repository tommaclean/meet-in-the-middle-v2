import Geocode from 'react-geocode';


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
      console.error(error, "Error with Address 1");
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
      console.error(error, "Error with Address 2");
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
      console.error(error, "Error with Address 3");
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
  handlePlacesFetch(coordinates, dispatch)
  dispatch({ type: 'SET_MIDPOINT_START' })
    try{
      dispatch({ type: 'SET_MIDPOINT_SUCCESS', midpoint: { lat: coordinates[0], lng: coordinates[1] }})
    } catch (error) {
      dispatch({ type: 'SET_MIDPOINT_FAILURE', error: error })
  }
    
}

const handlePlacesFetch = (coordinates, dispatch) => {
  dispatch({ type: 'GET_SEARCH_RESULTS_START'});
  const corStr = coordinates.toString()
  const apiKey = process.env.REACT_APP_GOOGLE_KEY
  const googleURL = `https://secret-bayou-02815.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${corStr}&radius=1500&types=bar&key=${apiKey}`
 

  return fetch(googleURL)
      .then(res => res.json())
      .then(searchResults => {  
        dispatch({ type: 'GET_SEARCH_RESULTS_SUCCESS', searchResults: searchResults.results, showSearchResults: true });
      })
      .catch(error => {
        console.log("handlePlacesFetch error", error)
        //dispatch({ type: 'GET_SEARCH_RESULTS_FAILURE', error: error });
      });
    
};

export const handleLocationSelection = (searchResult) => dispatch => {
  dispatch({ type: 'SET_SELECTED_LOCATION_START' })
    try{
      dispatch({ type: 'SET_SELECTED_LOCATION_SUCCESS', selectedResult: searchResult, showSelectedLocation: true })
    } catch (error) {
      dispatch({ type: 'SET_SELECTED_LOCATION_FAILURE', error: error })
  }
}

export const closeSelectedLocation = () => dispatch => {
    try{
      dispatch({ type: 'CLOSE_SELECTED_LOCATION_SUCCESS' })
    } catch (error) {
      dispatch({ type: 'CLOSE_SELECTED_LOCATION_FAILURE', error: error })
  }
}

export const clearSearchResults = () => dispatch => {

  dispatch({ type: 'CLEAR_SEARCH_RESULTS_START' })
    try{
      dispatch({ type: 'CLEAR_SEARCH_RESULTS_SUCCESS', searchResults: {}, selectedResult: {}, showSearchResults: false, showSelectedLocation: false, midpoint: null })
    } catch (error) {
      dispatch({ type: 'CLEAR_SEARCH_RESULTS_FAILURE', error: error })
  }
}

export const showSearchResults = () => dispatch => {
    try{
      dispatch({ type: 'SHOW_SEARCH_RESULTS_SUCCESS'})
    } catch (error) {
      dispatch({ type: 'SHOW_SEARCH_RESULTS_FAILURE', error: error })
  }
}

