import React from 'react'
import App from '../../App.js'
import Map from '../../components/Map/Map.js'
import Profile from '../../components/Profile/Profile.js'
import SearchPane from '../SearchPane/SearchPane.js'
import SearchResults from '../SearchResults/SearchResults.js'
import './MainPage.css'

function MainPage(){
        return (
            <div className="MainPage-header">
                <p>This is MainPage.js.</p>
                <SearchPane />
                <Profile />
                <Map />
                <SearchResults />
            </div>
        )
}


export default MainPage;