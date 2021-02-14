import React, {useEffect} from 'react'
import '../FavMeetups/FavMeetups.css'
import { connect } from 'react-redux'
import Map from '../../components/Map/Map'
import { deleteFavorite, getFavMeetups, getMeetups } from '../../state/actions/meetupsActions'


const FavMeetups = (props)  => {
    useEffect(() => {
        props.getFavMeetups()
    }, [props.favMeetups.length])

    let mappedFavs

    if (props.favMeetups) {
        mappedFavs = props.favMeetups.slice(0).reverse().map((favMeetup, index) => {
        return (
            <div key={favMeetup.id} className="FavMeetup">
                <li>{favMeetup.meetup.id}. {favMeetup.meetup.name}</li>
                <button onClick={() => props.deleteFavorite(favMeetup.id).then(() => props.getFavMeetups()).then(() => props.getMeetups())
                    }>Delete</button>  
            </div>
        )})}
        return (  
            <div>
                <div className="FavMeetup">
                {mappedFavs}
                <Map markers={props.favMeetups}/>
                </div>
            </div>
    )
}

const mapStateToProps = state => {
    return {
        favMeetups: state.meetups.favMeetups,
        markers: state.meetups.pastMeetups,
        midpoint: state.searchResults.midpoint
      }
}

const mapDispatchToProps = {
    deleteFavorite: deleteFavorite,
    getFavMeetups: getFavMeetups,
    getMeetups: getMeetups
}

export default connect(mapStateToProps, mapDispatchToProps)(FavMeetups)