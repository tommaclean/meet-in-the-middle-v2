import React, { useEffect } from 'react'
import './PastMeetups.css'
import { useDispatch, useSelector } from 'react-redux'
import Map from '../../components/Map/Map'
import Button from '../../components/UI/Button/Button'
import { favoriteMeetup, deleteMeetup, getFavMeetups, getMeetups, actionLog } from '../../state/actions/meetupsActions'


const PastMeetups = (props) => {
  
    const dispatch = useDispatch();
    const pastMeetups = useSelector(state => state.meetups.meetups)
    const markers = useSelector(state => state.meetups.pastMeetups)
    // const midpoint = useSelector(state => state.searchResults.midpoint)
    // pastMeetups: state.meetups.meetups,
    // markers: state.meetups.pastMeetups,
    // midpoint: state.searchResults.midpoint

    useEffect(() => {
        // dispatch(actionLog('GET_MEETUPS_START'))
        // dispatch(props.getMeetups())
        dispatch(getMeetups())
        
    }, [])

    let mappedMeetups
   

    if (pastMeetups.length) {
        mappedMeetups = pastMeetups.slice(0).reverse().map((meetup, index) => {
        return (
            <div key={index} className="individualMeetup" >
                <div key={meetup.id} className="PastMeetup">
                <li className="meetupName">{meetup.name}</li>
                <li className="meetupAddress">{meetup.vicinity}</li>
                    <div className="pastMeetupButtons">
                     
                        <button className="resultButton" onClick={() => dispatch(favoriteMeetup(meetup.id)).then(() => dispatch(getFavMeetups()))}>Favorite</button>
                        <div className="divider"></div>
                        <button className="resultButton" onClick={() => dispatch(deleteMeetup(meetup.id)).then(() => dispatch(getMeetups()))}>Delete</button>
                        
                    </div>
                </div>
            </div>
        )})}
        return (  
            <div className="PastMeetups-container">
                <div className="ScrollablePastMeetups">
                    {mappedMeetups}
                </div>
                <div className="Map">
                    <Map markers={pastMeetups}/>
                </div>
            </div>
    )
}

// const mapStateToProps = state => {
//     return {
//         pastMeetups: state.meetups.meetups,
//         markers: state.meetups.pastMeetups,
//         midpoint: state.searchResults.midpoint
//       }
// }

export default PastMeetups