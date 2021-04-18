import React, { useState } from 'react'
import './Map.css'
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';



const containerStyle = {
  width: '765px',
  height: '700px'
};

let resultsMarkers

const Map = (props) => {
      let markerCoordinates
      let midpoint = props.midpoint || {lat:40.7019763, lng:-73.9972181}
      const [coorToShow, setCoorToShow] = useState(midpoint)
      const [locationToShow, setLocationToShow] = useState({})
  
   
      const [showMarker, setshowMarker] = useState(false)


      
      const infoWindowHandler = (result) => {
        // setshowMarker(true)
        // handleLocationSet(result)
      }

      // const handleLocationSet = (result) => {
      //   setLocationToShow(result)
      //   setCoorToShow(result.geometry.location)
      // }

      const handleToggleClose = () => {
        setshowMarker(false)
        setLocationToShow(null)

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
        <div className="map">
          <Marker 
            key={index} 
            position={markerCoordinates} 
            animation={"BOUNCE"}
            onClick={() => infoWindowHandler(result)}
            />
        </div>

      )})} 

  return (
    <div className="mainMap">


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
            <div key={locationToShow.id}><h4>{locationToShow.name}</h4>
            <p>{locationToShow.vicinity}</p>
            </div> : 
            null }
        </InfoWindow>: null }
        <></>
      </GoogleMap>
  
  </div>
  )
}

export default Map