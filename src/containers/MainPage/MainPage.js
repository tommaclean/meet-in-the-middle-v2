import React from 'react'
import { connect } from 'react-redux'
import Map from '../../components/Map/Map.js'
import Header from '../../UI/Header/Header'
import Profile from '../../components/Profile/Profile.js'
import PastMeetups from '../../containers/PastMeetups/PastMeetups'
import SearchPane from '../SearchPane/SearchPane.js'
import { setShowPastMeetups } from '../../actions/meetupActions'
import useToggle from '../../snippets/useToggle'

import './MainPage.css'

function MainPage(props){
        const [showPastMeetups, togglePastMeeups] = useToggle();
        return (
            <div className="MainPage-header">
                <Header />
                <SearchPane />
                <div>
                  <button onClick={togglePastMeeups}>Past Meetups - Show // Hide</button>
                  {showPastMeetups ? <PastMeetups /> : null }
                </div>
                <Profile />
                <Map />
            </div>
        )
}

const mapDispatchToProps = {
    setShowPastMeetups: setShowPastMeetups
  }

const mapStateToProps = state => {
    return {
      showPastMeetups: state.meetups.showPastMeetups
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);