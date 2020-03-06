import './App.css';
import React from 'react'
import { connect } from 'react-redux'
import MainPage from '../src/pages/MainPage/MainPage'
import LoginPage from './pages/LoginPage/LoginPage';
import { Switch, Route } from 'react-router-dom'
import ProfilePage from './pages/ProfilePage/ProfilePage';


const App = () => {
    return (
        <div>
            
            <Switch>
                <Route path="/login" component={LoginPage}/>
                <Route path="/main" component={MainPage}/>
                <Route path="/profile" component={ProfilePage}/>
                <Route path="/" component={LoginPage}/>
            </Switch>
        </div>
    );

}

const mapStateToProps = state => {
    return {
        page: state.user.page,
        loggedIn: state.user.loggedIn
      }
}



export default connect(mapStateToProps, null)(App)
