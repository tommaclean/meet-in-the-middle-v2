import React from 'react'
import { connect } from 'react-redux'


const SignupPage = () => {
    return (
        <div>
            Hi, I'm the Signup Page
        </div>
    )
}

const mapStateToProps = state => {
    return {
        pastMeetups: state.meetups.meetups
      }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage)