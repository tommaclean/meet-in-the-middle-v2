import './App.css';
import React from 'react'
import { connect } from 'react-redux'
import Header from '../src/components/UI/Header/Header';
import MainPage from '../src/pages/MainPage/MainPage'
import LoginPage from './pages/LoginPage/LoginPage';
import { Switch, Route } from 'react-router-dom'
import ProfilePage from './pages/ProfilePage/ProfilePage';
import SignupPage from './pages/SignupPage/SignupPage';


const App = () => {
    return (
        <div>
            <Switch>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <Route path="/signup">
                    <SignupPage />
                </Route>
                <Route path="/main">
                    <Header />
                    <MainPage />
                </Route>
                <Route path="/profile">
                    <Header />
                    <ProfilePage />
                </Route>
                <Route path="/" >
                    <Header />
                    <MainPage />
                </Route>
            </Switch>
        </div>
    );

}

const mapStateToProps = state => {
    return {
        loggedIn: state.users.loggedIn,
        token: state.users.token
      }
}



export default connect(mapStateToProps, null)(App)
