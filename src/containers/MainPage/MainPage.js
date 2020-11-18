import React from 'react'
import Map from '../../components/Map/Map'
import Profile from '../../components/Profile/Profile'
import './MainPage.css'

function MainPage() {
    return (
        <div className="MainPage-header">
            <Map />
            This is the main page.
            <Profile />
        </div>
    )
}


export default MainPage;