import React, {useEffect} from 'react'
import '../FavMeetups/FavMeetups.css'
import { connect } from 'react-redux'
import { deleteFavorite, getFavMeetups, getMeetups } from '../../state/actions/meetupActions'


const FavMeetups = (props)  => {
    useEffect(() => {
        props.getFavMeetups()
    }, [])
    let mappedFavs
    if (props.favMeetups) {
        mappedFavs = props.favMeetups.slice(0).reverse().map((favMeetup, index) => {
        return (
            <div key={favMeetup.id} className="FavMeetup">
                <li>{favMeetup.meetup.id}. {favMeetup.meetup.location}</li>
                <button onClick={() => props.deleteFavorite(favMeetup.id).then(() => props.getFavMeetups()).then(() => props.getMeetups())
                    }>Delete</button>
                    
            </div>
        )})}
        return (  
            <div>
                <div className="FavMeetup">
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
    getFavMeetups: getFavMeetups,
    getMeetups: getMeetups
}

export default connect(mapStateToProps, mapDispatchToProps)(FavMeetups)