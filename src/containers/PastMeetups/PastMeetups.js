import React, { useEffect } from 'react'
import './PastMeetups.css'
import { connect, useDispatch } from 'react-redux'
import Map from '../../components/Map/Map'
import { favoriteMeetup, deleteMeetup, getFavMeetups, getMeetups, actionLog } from '../../state/actions/meetupsActions'


const PastMeetups = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(actionLog('GET_MEETUPS_START'))
        // dispatch(props.getMeetups())
        dispatch(props.getMeetups())
        
    }, [])

    let mappedMeetups

    // if (props.pastMeetups) {
    //     mappedMeetups = props.pastMeetups.slice(0).reverse().map((meetup, index) => {
    //     return (
    //         <div key={meetup.id} className="PastMeetup" >
    //             <li>{meetup.id}. {meetup.name}</li>
    //             <button onClick={() => props.favoriteMeetup(meetup.id).then(() => props.getFavMeetups())}>❤️ Favorite</button>
    //             <button onClick={() => props.deleteMeetup(meetup.id).then(() => props.getMeetups())}>Delete</button>
    //         </div>
    //     )})}
        return (  
            <div className="PastMeetups-container">
                <div className="PastMeetups">
                    {mappedMeetups}
                </div>
                <div className="Map">
                    {/* <Map markers={props.pastMeetups} /> */}
                </div>
            </div>
    )
}

const mapStateToProps = state => {
    return {
        pastMeetups: state.meetups.meetups,
        markers: state.meetups.pastMeetups,
        midpoint: state.searchResults.midpoint
      }
}

const mapDispatchToProps = {
    favoriteMeetup: favoriteMeetup,
    deleteMeetup: deleteMeetup, 
    getFavMeetups: getFavMeetups,
    getMeetups: getMeetups
}

export default connect(mapStateToProps, mapDispatchToProps)(PastMeetups)