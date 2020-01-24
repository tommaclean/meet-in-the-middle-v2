import React, { useEffect } from 'react'
import classes from './PastMeetups.module.css'
import { connect } from 'react-redux'
import { favoriteMeetup, getFavMeetups, getMeetups } from '../../actions/meetupActions'


const PastMeetups = (props) => {
    useEffect(() => {
        props.getMeetups()
    }, [])
    let mappedMeetups
    if (props.pastMeetups) {
        mappedMeetups = props.pastMeetups.slice(0).reverse().map((meetup, index) => {
        return (
            <div key={meetup.id} className={classes.PastMeetup} onClick={() => props.favoriteMeetup(meetup.id).then(() => props.getFavMeetups())}>
                <li>{meetup.id}. {meetup.location}</li>
                <li className={classes.FavoriteMeetup}>❤️ Favorite This Meetup</li>
            </div>
        )})}
        return (  
            <div>
                <div className={classes.MainPastMeetups}>
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