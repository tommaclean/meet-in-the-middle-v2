import React from 'react'
import classes from './PastMeetups.module.css'
import { connect } from 'react-redux'
import { getMeetups } from '../../actions/meetupActions'



// () => props.getMeetups(), 

function PastMeetups(props) {
    console.log(props.pastMeetups)
    let mappedMeetups
    // When there are pastMeetups in props
    if (props.pastMeetups.length > 0 ) {
        mappedMeetups = props.pastMeetups.slice(0).reverse().map((meetup, index) => {
        return (
            <div key={meetup.id} className={classes.PastMeetup}>
                <li>{meetup.id}. {meetup.location}</li>
            </div>
        )})}
        return (  
            <div>
                Past Meetups:
                <div className={classes.MainPastMeetups}>
                {mappedMeetups}
                </div>
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