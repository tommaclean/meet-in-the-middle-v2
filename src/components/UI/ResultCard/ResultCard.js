import React from 'react'
import { InfoWindow } from '@react-google-maps/api';

const ResultCard = (props) => {
    console.log("This is infoWindow from UI folder", props)
    const divStyle = {
      background: `white`,
      border: `1px solid #ccc`,
      padding: 5
    }
    return (
     <div>InfoWindow</div>
    )
}


export default ResultCard


// <InfoWindow onLoad={onLoad} position={props.position} anchor={props.anchor}>
// <div style={divStyle}>
// <h1>InfoWindow</h1>
// </div>
// </InfoWindow>