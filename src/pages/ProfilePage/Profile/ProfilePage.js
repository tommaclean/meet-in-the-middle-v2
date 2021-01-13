import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getProfile } from '../../../state/actions/userActions'
import PastMeetups from '../../../containers/PastMeetups/PastMeetups'
import FavMeetups from '../../../containers/FavMeetups/FavMeetups'
import useToggle from '../../../snippets/useToggle'
import { setShowPastMeetups, setShowFavMeetups } from '../../../state/actions/meetupActions'

const ProfilePage = (props) => {
      useEffect(() => {
        if (!localStorage.token) {
            props.history.push('/login')
            return
        } else {
            props.getProfile()
        }
    }, [props])


    const [showPastMeetups, togglePastMeeups] = useToggle();
    const [showFavMeetups, toggleFavMeetups] = useToggle();

    const greeting = (`Welcome!, ${props.currentUsername}`)
    return (
    <div>
        {
            props.currentUsername ?
            greeting :
            ("Getting your information...")
        }
        <div>
            <button onClick={togglePastMeeups}>Past Meetups</button>
            {showPastMeetups ? <PastMeetups /> : null }
        </div>
        <div>
            <button onClick={toggleFavMeetups}>Favorite Meetups</button>
            {showFavMeetups ? <FavMeetups /> : null }
        </div>
    </div>
    )
}

const mapStateToProps = state => {
    return {
        currentUsername: state.user.currentUser.username,
        loggedIn: state.user.loggedIn
    }
}

const mapDispatchToProps = {
    getProfile: getProfile,
    setShowPastMeetups: setShowPastMeetups,
    setShowFavMeetups: setShowFavMeetups
}






export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)