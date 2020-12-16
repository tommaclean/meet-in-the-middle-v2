import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getMeetups } from '../../actions/meetupActions'




function PastMeetup(props) {
    let mappedMeetups
    if (props.pastMeetups.length > 0 ) {
        mappedMeetups = props.pastMeetups.map((meetup, index) => {
        return (
            <div key={meetup.id}>
                <li>Name: {meetup.location}</li>
            </div>
        )})}
    return (
        <div>
            <button onClick={() => props.getMeetups()}>Click to Show Past Meetups</button>
            {mappedMeetups}
      </div>
    )
}

const mapStateToProps = state => {
    return {
        pastMeetups: state.meetups.meetups
      }
}

const mapDispatchToProps = {
    getMeetups: getMeetups
}

export default connect(mapStateToProps, mapDispatchToProps)(PastMeetup)