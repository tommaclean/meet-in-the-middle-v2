import React from 'react'
import classes from './PastMeetups.module.css'
import { connect } from 'react-redux'
import { favoriteMeetup, getFavMeetups } from '../../actions/meetupActions'


function PastMeetups(props) {
    
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
    getFavMeetups: getFavMeetups
}

export default connect(mapStateToProps, mapDispatchToProps)(PastMeetups)