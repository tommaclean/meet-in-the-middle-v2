import React, { useEffect } from 'react'
import './PastMeetups.css'
import { useDispatch, useSelector } from 'react-redux'
import Map from '../../components/Map/Map'
import { deleteMeetup, getMeetups } from '../../state/actions/meetupsActions'


const PastMeetups = (props) => {
  
    const dispatch = useDispatch();
    const pastMeetups = useSelector(state => state.meetups.meetups)

    useEffect(() => {
        dispatch(getMeetups())
        
    }, [dispatch])

    let mappedMeetups
  
   

    if (pastMeetups.length) {
        mappedMeetups = pastMeetups.slice(0).reverse().map((meetup, index) => {
        return (
            <div key={index} className="individualMeetup" >
                <div key={meetup.id} className="PastMeetup">
                <li className="meetupName">{meetup.name}</li>
                <li className="meetupAddress">{meetup.address}
                        <div className="divider" key={"divider"}></div>
                        <button className="resultButton" onClick={() => dispatch(deleteMeetup(meetup.id)).then(() => dispatch(getMeetups()))}>Delete</button>
                </li>
                </div>
            </div>
        )})}
        return (  
            <div className="PastMeetups-container">
                <div className="ScrollablePastMeetups">
                <h2 className="pastMeetupsHeader">Past Meetups</h2>
                    {mappedMeetups}
                </div>
                <div className="Map">
                    <Map markers={pastMeetups}/>
                </div>
            </div>
    )
}


export default PastMeetups