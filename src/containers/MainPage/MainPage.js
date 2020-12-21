import React from 'react'
import { connect } from 'react-redux'
import Map from '../../components/Map/Map.js'
import Profile from '../../components/Profile/Profile.js'
import PastMeetups from '../../containers/PastMeetups/PastMeetups'
import SearchPane from '../SearchPane/SearchPane.js'
import { setShowPastMeetups } from '../../actions/meetupActions'
import './MainPage.css'

function MainPage(props){
        // console.log('main page props', props)
        return (
            <div className="MainPage-header">
                <SearchPane />
                <button onClick={props.setShowPastMeetups}>Click to Show/Hide Past Meetups</button>
                {props.showPastMeetups ? <PastMeetups /> : null }
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