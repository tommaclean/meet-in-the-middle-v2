import React from 'react'
import classes from './FavMeetups.module.css'
import { connect } from 'react-redux'
import { deleteFavorite } from '../../actions/meetupActions'


function FavMeetups(props) {
    
    let mappedFavs
    if (props.favMeetups.length > 0 ) {
        mappedFavs = props.favMeetups.slice(0).reverse().map((favMeetup, index) => {
        return (
            <div key={favMeetup.id} className={classes.PastMeetup}>
                <li>{favMeetup.id}. {favMeetup.location}</li>
                <li className={classes.FavoriteMeetup} onClick={props.deleteFavorite}>X Delete</li>
            </div>
        )})}
        return (  
            <div>
                Favorite Meetups:
                <div className={classes.MainPastMeetups}>
                {mappedFavs}
                </div>
            </div>
    )
}

const mapStateToProps = state => {
    return {
        favMeetups: state.meetups.favMeetups
      }
}

const mapDispatchToProps = {
    deleteFavorite: deleteFavorite
}

export default connect(mapStateToProps, mapDispatchToProps)(FavMeetups)