import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getMeetups } from '../../actions/meetupActions'


function PastMeetup(props) {
    useEffect(() => {
        console.log('useEffect in PastMeetup', props.pastMeetups)
    }, [props.pastMeetups])

    return (
        <div>Past Meetup</div>
    )
}

const mapStateToProps = state => {
    return {
        pastMeetups: state.meetups
      }
}

const mapDispatchToProps = {
    getMeetups: getMeetups
}

export default connect(mapStateToProps, mapDispatchToProps)(PastMeetup)