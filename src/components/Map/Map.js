import React from 'react'
import { connect } from 'react-redux'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const apiKey = process.env.REACT_APP_GOOGLE_KEY

const containerStyle = {
  width: '400px',
  height: '400px'
};

let markerCoordinates
let resultsMarkers

const Map = (props) => {
  // const [map, setMap] = useState(null)
  
  if (props.markers.length > 0) {
      resultsMarkers = props.markers.map((result, index) => { 
      markerCoordinates = ({ lat: result.geometry.location.lat, 
        lng: result.geometry.location.lng })
      return (
      <Marker key={result.id} position={markerCoordinates} Animation={"BOUNCE"}/>
      )})}
    

 
  return (
    <LoadScript
      googleMapsApiKey={apiKey}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={props.midpoint}
        zoom={13}
        // onLoad={onLoad}
        // onUnmount={onUnmount}
      >
        {resultsMarkers}
        <Marker icon={"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"} position={props.midpoint} label={"Midpoint"} animation={"bounce"} zIndex={0}/>
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

const mapStateToProps = state => {
  return {
    markers: state.maps.markers,
    midpoint: state.searchResults.midpoint
  }
}

export default connect(mapStateToProps, null)(Map);