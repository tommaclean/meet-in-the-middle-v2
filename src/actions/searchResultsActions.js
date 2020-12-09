import Geocode from 'react-geocode';
Geocode.setApiKey(process.env.REACT_APP_GOOGLE_KEY)
  
export const handleAddressSubmit = ({e, address1, address2, address3}) => dispatch => {
  // Empty latitude and longitude arrays to later find the average (midpoint)
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
        
export const handleMidpointCalculation = (lats, lngs, dispatch) => {
  // Finding the average of the latitudes 
  let latSum = lats.reduce((previous, current) => current += previous);
  let latAvg = latSum / 3;
  
  // Finding the average of the longitudes
  let lngSum = lngs.reduce((previous, current) => current += previous);
  let lngAvg = lngSum / 3;
  let coordinates = [latAvg, lngAvg]

  // Send the average latitude and longitude to the Google Maps API
  handlePlacesFetch(coordinates, dispatch)
    
}

export const handlePlacesFetch = (coordinates, dispatch) => {
  const corStr = coordinates.toString()
  const apiKey = process.env.REACT_APP_GOOGLE_KEY
  // debugger
  console.log("coordinates", coordinates)
  return fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${corStr}&radius=1500&types=bar&key=${apiKey}`, {method: 'GET', mode: 'no-cors', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }})
      .then(res => res.json())
      .then(searchResults => {
        console.log("searchResults", searchResults)
        dispatch({ type: 'GET_SEARCH_RESULTS_SUCCESS', searchResults: searchResults.results });
      })
      .catch(error => {
        console.log("THIS IS THE ERROR!", error)
        //dispatch({ type: 'GET_SEARCH_RESULTS_FAILURE', error: error });
      });
    
};