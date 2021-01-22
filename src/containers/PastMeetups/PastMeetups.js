import React, { useEffect } from 'react'
import './PastMeetups.css'
import { connect } from 'react-redux'
import { favoriteMeetup, getFavMeetups, getMeetups } from '../../state/actions/meetupsActions'


const PastMeetups = (props) => {
    

    useEffect(() => {
        props.getMeetups()
    }, [props.pastMeetups.length])

    let mappedMeetups

    if (props.pastMeetups) {
        mappedMeetups = props.pastMeetups.slice(0).reverse().map((meetup, index) => {
        return (
            <div key={meetup.id} className="PastMeetup" >
                <li>{meetup.id}. {meetup.location}</li>
                <button onClick={() => props.favoriteMeetup(meetup.id).then(() => props.getFavMeetups())}>❤️ Favorite</button>
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