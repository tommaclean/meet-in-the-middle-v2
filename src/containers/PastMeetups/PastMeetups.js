import React, { useEffect } from 'react'
import classes from './PastMeetups.module.css'
import { connect } from 'react-redux'
import { getMeetups } from '../../actions/meetupActions'


// () => props.getMeetups(), 

function PastMeetups(props) {
    let mappedMeetups
    // When there are pastMeetups in props
    if (props.pastMeetups.length > 0 ) {
        mappedMeetups = props.pastMeetups.map((meetup, index) => {
        return (
            <div key={meetup.id} className={classes.PastMeetup}>
                <li>{meetup.id}. {meetup.location}</li>
            </div>
        )})}
        return (   
            <div>
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

export default connect(mapStateToProps, mapDispatchToProps)(PastMeetups)