import Geocode from 'react-geocode';
  
export const handleAddressSubmit = ({e, address1, address2, address3}) => {
  let lats = []
  let lngs = []
  
  let promise1 = Geocode.fromAddress(address1).then(
    response => {
      const { lat, lng } = response.results[0].geometry.location;
      let lat1 = lat
      let lng1 = lng
      lats = [...lats, lat1]
      lngs = [...lngs, lng1]
      const address1Coor = [lat1, lng1]
      console.log(lats, lngs, "address 1 lats & lngs")
    },
    error => {
      console.error(error, "address 1");
    }
    );
    
    let promise2 = Geocode.fromAddress(address2).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        let lat2 = lat
        let lng2 = lng
        lats = [...lats, lat2]
        lngs = [...lngs, lng2]
        const address2Coor = [lat2, lng2]
        console.log(lats, lngs, "address 2 lats & lngs")
      },
      error => {
        console.error(error, "address 2");
      }
      );
      
      let promise3 = Geocode.fromAddress(address3).then(
        response => {
          const { lat, lng } = response.results[0].geometry.location;
          let lat3 = lat
          let lng3 = lng
          lats = [...lats, lat3]
          lngs = [...lngs, lng3]
          const address3Coor = [lat3, lng3]
          console.log(lats, lngs, "address 3 lats & lngs")
        }
        );
        
        Promise.all([promise1, promise2, promise3]).then(() => handleMidpointCalculation(lats, lngs))
        
}
        
export const handleMidpointCalculation = (lats, lngs) => {
  let latSum = lats.reduce((previous, current) => current += previous);
  let latAvg = latSum / 3;
  
  let lngSum = lngs.reduce((previous, current) => current += previous);
  let lngAvg = lngSum / 3;
  let midpointAddress
  let coordinates = [latAvg, lngAvg]
  
  Geocode.fromLatLng(latAvg, lngAvg).then(
    response => {
      midpointAddress = response.results[0].formatted_address;
    },
    error => {
      console.error(error);
    }
    ).then(() => handlePlacesFetch(coordinates))
    
}

export const handlePlacesFetch = (coordinates) => {
  const corStr = coordinates.toString()
  const apiKey = process.env.REACT_APP_GOOGLE_KEY

  console.log('handlePlacesFetch', corStr)
  return fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${corStr}&radius=1500&types=bar&key=${apiKey}`)
      .then(res => res.json())
      .then(searchResults => {
        // dispatch({ type: 'GET_SEARCH_RESULTS_SUCCESS', searchResults: searchResults.results });
      })
      .catch(error => {
        // dispatch({ type: 'GET_SEARCH_RESULTS_FAILURE', error: error });
      });

};