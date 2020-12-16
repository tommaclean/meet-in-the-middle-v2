import React from 'react'


const Meetup = (props) => {
    return (
    <div style={{border: '1px solid black'}}>
      <h2>Location: {props.location}</h2>
      <p>Creator: {props.creator}</p>
      <p>Address 1: {props.address1}</p>
      <p>Address 2: {props.address2}</p>
      <p>Address 3: {props.address3}</p>
    </div>
        )
}

export default Meetup