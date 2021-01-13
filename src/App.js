import './App.css';
import React from 'react'
import { connect } from 'react-redux'
import MainPage from '../src/pages/MainPage/MainPage'
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import { Switch, Route } from 'react-router-dom'
import ProfilePage from './pages/ProfilePage/Profile/ProfilePage';

const App = () => {
    return (
            <Switch>
                <Route path="/signup" component={SignupPage}/>
                <Route path="/profile" component={ProfilePage}/>
                <Route path="/main" component={MainPage}/>
                <Route path="/" component={LoginPage}/>
            </Switch>
    );

}

const mapStateToProps = state => {
    return {
        page: state.user.page,
        loggedIn: state.user.loggedIn
      }
}



export default connect(mapStateToProps, null)(App)
