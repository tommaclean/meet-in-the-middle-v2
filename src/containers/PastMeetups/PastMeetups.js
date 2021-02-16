import React, { useEffect } from 'react'
import './PastMeetups.css'
import { connect } from 'react-redux'
import Map from '../../components/Map/Map'
import { favoriteMeetup, deleteMeetup, getFavMeetups, getMeetups } from '../../state/actions/meetupsActions'


const PastMeetups = (props) => {
    useEffect(() => {
        props.getMeetups()
    }, [props.pastMeetups.length])

    let mappedMeetups

    if (props.pastMeetups) {
        mappedMeetups = props.pastMeetups.slice(0).reverse().map((meetup, index) => {
        return (
            <div key={meetup.id} className="PastMeetup" >
                <li>{meetup.id}. {meetup.name}</li>
                <button onClick={() => props.favoriteMeetup(meetup.id).then(() => props.getFavMeetups())}>❤️ Favorite</button>
                <button onClick={() => props.deleteMeetup(meetup.id).then(() => props.getMeetups())
                    }>Delete</button>
            </div>
        )})}
        return (  
            <div>
                <div className="FavoriteMeetup">
                {mappedMeetups}
                </div>
                <Map markers={props.pastMeetups}/>
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