import React, { useEffect } from 'react'
import './PastMeetups.css'
import { connect } from 'react-redux'
import { favoriteMeetup, getFavMeetups, getMeetups } from '../../state/actions/meetupActions'


const PastMeetups = (props) => {
    useEffect(() => {
        props.getMeetups()
    }, [])
    let mappedMeetups
    if (props.pastMeetups) {
        mappedMeetups = props.pastMeetups.slice(0).reverse().map((meetup, index) => {
        return (
            <div key={meetup.id} className="PastMeetup" onClick={() => props.favoriteMeetup(meetup.id).then(() => props.getFavMeetups())}>
                <li>{meetup.id}. {meetup.location}</li>
                <button className="FavoriteMeetup">❤️ Favorite</button>
            </div>
        )})}
        return (  
            <div>
                <div className="FavoriteMeetup">
                {mappedMeetups}
                </div>
            </div>
    )
}

const mapStateToProps = state => {
    return {
        pastMeetups: state.meetups.meetups
      }
}

const mapDispatchToProps = {
    favoriteMeetup: favoriteMeetup,
    getFavMeetups: getFavMeetups,
    getMeetups: getMeetups
}

export default connect(mapStateToProps, mapDispatchToProps)(PastMeetups)