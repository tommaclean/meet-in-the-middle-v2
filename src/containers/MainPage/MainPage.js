import React from 'react'
import { connect } from 'react-redux'
import Map from '../../components/Map/Map.js'
import Header from '../../components/UI/Header/Header'
import Profile from '../../pages/Profile/Profile/Profile.js'
import PastMeetups from '../../containers/PastMeetups/PastMeetups'
import FavMeetups from '../../containers/FavMeetups/FavMeetups'
import SearchPane from '../SearchPane/SearchPane.js'
import { setShowPastMeetups, setShowFavMeetups } from '../../state/actions/meetupActions'
import useToggle from '../../snippets/useToggle'
import './MainPage.css'


const MainPage = () => {
        const [showPastMeetups, togglePastMeeups] = useToggle();
        const [showFavMeetups, toggleFavMeetups] = useToggle();
        return (
            <div className="MainPage-header">
                <Header />
                <SearchPane />
                <div>
                  <button onClick={togglePastMeeups}>Past Meetups</button>
                  {showPastMeetups ? <PastMeetups /> : null }
                </div>
                <div>
                  <button onClick={toggleFavMeetups}>Favorite Meetups</button>
                  {showFavMeetups ? <FavMeetups /> : null }
                </div>
                <Profile />
                <Map />
            </div>
        )
}

const mapDispatchToProps = {
    setShowPastMeetups: setShowPastMeetups,
    setShowFavMeetups: setShowFavMeetups
  }

const mapStateToProps = state => {
    return {
      showPastMeetups: state.meetups.showPastMeetups
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);