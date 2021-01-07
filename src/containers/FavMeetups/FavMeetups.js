import React from 'react'
import classes from '../FavMeetups/FavMeetups.module.css'
import { connect } from 'react-redux'
import { deleteFavorite, getFavMeetups } from '../../actions/meetupActions'


function FavMeetups(props) {
    console.log("FavMeetup", props)
    let mappedFavs
    if (props.favMeetups) {
        mappedFavs = props.favMeetups.slice(0).reverse().map((favMeetup, index) => {
        return (
            <div key={favMeetup.id} className={classes.PastMeetup}>
                <li>{favMeetup.meetup.id}. {favMeetup.meetup.location}</li>
                <li className={classes.FavoriteMeetup} 
                    onClick={() => props.deleteFavorite(favMeetup.id)
                    }>x Delete x</li>
                    
            </div>
        )})}
        return (  
            <div>
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
    deleteFavorite: deleteFavorite,
    getFavMeetups: getFavMeetups
}

export default connect(mapStateToProps, mapDispatchToProps)(FavMeetups)