import React, { useState } from 'react'
// import useToggle from '../../snippets/useToggle'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const apiKey = process.env.REACT_APP_GOOGLE_KEY

const containerStyle = {
  width: '400px',
  height: '400px'
};

let markerCoordinates
let resultsMarkers

const Map = (props) => {

  
      let midpoint = props.midpoint || {lat:40.7019763, lng:-73.9972181}
      const [coorToShow, setCoorToShow] = useState(midpoint)
      const [locationToShow, setLocationToShow] = useState({})
  
      // const [showMarker, setshowMarker] = useToggle(false);
      const [showMarker, setshowMarker] = useState(false)

      // console.log("showMarker: ", showMarker)
      
      const infoWindowHandler = (result) => {
        // console.log("result", result)
        setshowMarker(true)
        handleLocationSet(result)
      }

      const handleLocationSet = (result) => {
        // console.log("handleLocationSet: ", result)
        setLocationToShow(result)
        setCoorToShow(result.geometry.location)
        console.log("locationToShow", locationToShow)
      }

      const handleToggleClose = () => {
        // console.log("coorToShow 1:", locationToShow)
        setshowMarker(false)
        setLocationToShow(null)
        // console.log("coorToShow 2:", locationToShow)

      }

  if (props.markers.length) {
      resultsMarkers = props.markers.map((result, index) => {
        if (result.place_coor) {
          markerCoordinates = ({ lat: result.place_coor.lat, 
            lng: result.place_coor.lng })
        } else if (result.geometry) {
          markerCoordinates = ({ lat: result.geometry.location.lat, 
            lng: result.geometry.location.lng })
        }
      return (
        <div>

      <Marker 
        key={result.id} 
        position={markerCoordinates} 
        animation={"BOUNCE"}
        onClick={() => infoWindowHandler(result)}
        />
      
        </div>

      )})}

  return (
    <LoadScript
      googleMapsApiKey={apiKey}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={midpoint}
        zoom={13}
      >
        {resultsMarkers}
        <Marker key={"midpoint"} icon={"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"} position={midpoint} label={"Midpoint"} animation={"bounce"} zIndex={0}/>
        {showMarker ? 
        <InfoWindow position={coorToShow} onCloseClick={() => handleToggleClose()}>
          {locationToShow ? 
            <div><h4>{locationToShow.name}</h4>
            <p>{locationToShow.vicinity}</p>
            </div> : 
            <div>InfoWindow</div>}
        </InfoWindow>: null }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default Map