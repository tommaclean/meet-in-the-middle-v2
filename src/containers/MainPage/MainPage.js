import React, { Component } from 'react'
import App from '../../App.js'
import Map from '../../components/Map/Map'
import Profile from '../../components/Profile/Profile'
import SearchPane from '../SearchPane/SearchPane'
import './MainPage.css'

class MainPage extends Component {
    render() {
        return (
            <div className="MainPage-header">
                <p>This is MainPage.js.</p>
                <SearchPane />
                <Profile />
                <Map />
            </div>
        )
    }
}


export default MainPage;