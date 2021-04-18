import React, {useEffect} from 'react'
import '../FavMeetups/FavMeetups.css'
import { connect, useDispatch, useSelector } from 'react-redux'
import Map from '../../components/Map/Map'
import { deleteFavorite, getFavMeetups, getMeetups } from '../../state/actions/meetupsActions'


const FavMeetups = (props)  => {

    const dispatch = useDispatch();
    const favMeetups = useSelector(state => state.meetups.favMeetups)
    let mappedFavs  
    // let filteredFavs = favMeetups.filter(v => v !== null)

    useEffect(() => {
        props.getFavMeetups()
    }, [])
    
   

   

    // if (filteredFavs) {
    //     mappedFavs = filteredFavs.slice(0).reverse().map((favMeetup, index) => {
    //     return (
    //         <div key={index} className="individualFavMeetup" >
    //         <div key={favMeetup.id} className="FavMeetup">
                
    //             <li className="favMeetupName">{favMeetup.name}</li>
    //             <li className="favMeetupAddress">{favMeetup.vicinity}</li>
    //                 <div className="favMeetupButtons">
    //                     <button className="resultButton" onClick={() => dispatch(deleteFavorite(favMeetup.id)).then(() => dispatch(getFavMeetups())).then(() => props.getMeetups())}>Delete Favorite</button>
                        
    //                 </div>
    //             </div>
    //         </div>
    //     )})}

        return (  
            <div className="FavMeetups-container">
                <div className="ScrollableFavMeetups">
                {mappedFavs}
                </div>
                <div className="Map">
                    {/* <Map markers={props.favMeetups}/> */}
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