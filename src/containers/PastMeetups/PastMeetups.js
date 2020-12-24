import React from 'react'
import classes from './PastMeetups.module.css'
import { connect } from 'react-redux'
import { favoriteMeetup } from '../../actions/meetupActions'


function PastMeetups(props) {
    const handleFavMeetup = () => {
        props.favoriteMeetup("Charlie Brown", props.meetup)
    }
    
    let mappedMeetups
    if (props.pastMeetups.length > 0 ) {
        mappedMeetups = props.pastMeetups.slice(0).reverse().map((meetup, index) => {
        return (
            <div key={meetup.id} className={classes.PastMeetup}>
                <li>{meetup.id}. {meetup.location}</li>
                <li className={classes.FavoriteMeetup} onClick={handleFavMeetup}>❤️ Favorite This Meetup</li>
            </div>
        )})}
        return (  
            <div>
                Past Meetups:
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
    favoriteMeetup: favoriteMeetup
}

export default connect(mapStateToProps, mapDispatchToProps)(PastMeetups)