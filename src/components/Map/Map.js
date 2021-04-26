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
        console.log(result)
        setshowMarker(true)
        handleLocationSet(result)
      }

      const handleLocationSet = (result) => {
        setLocationToShow(result)
        setCoorToShow(result.place_coor)
      }

      const handleToggleClose = () => {
        setshowMarker(false)
        setLocationToShow(null)

      }
      console.log("props.markers", props.markers)
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
        key={"mainMap"}
        mapContainerStyle={containerStyle}
        center={midpoint}
        zoom={13}
        >
        {props.markers ? resultsMarkers : null }
        <Marker key={"midpoint"} icon={"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"} position={midpoint} label={"Midpoint"} animation={"bounce"} zIndex={0}/>
        {showMarker ? 
        <InfoWindow position={coorToShow} onCloseClick={() => handleToggleClose()}>
          {locationToShow ? 
            <div className="locationToShow" key={locationToShow.id}><h4>{locationToShow.name}</h4>
            <p>{locationToShow.address}</p>
            </div> : 
            null }
        </InfoWindow>: null }
        <></>
      </GoogleMap>
  
  </div>
  )
}

export default Map