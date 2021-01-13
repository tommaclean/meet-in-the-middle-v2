import './App.css';
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import MainPage from '../src/pages/MainPage/MainPage'
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';

const App = (props) => {
    console.log(props)
    let page
    const [setShowPage, toggleShowPage] = useState('main');

    useEffect(() => {
        if (localStorage.token) {
            toggleShowPage('main')
        } else {
            toggleShowPage('login')
        }
    })
    
    const renderSwitch = () => {
        switch(props.page) {
            case 'signup':
                return <SignupPage />;
            case 'main':
                return <MainPage />;
            case 'login':
                return <LoginPage />;
            default:
                return "Switch ain't workin!";
        }
    }
      


    return (
        <div className="App">
            {renderSwitch(page)}
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
