import './App.css';
import React, { Component } from 'react'
import MainPage from './containers/MainPage/MainPage'

class App extends Component {
  render() {
    return (
      <div className="App">
          This is App.js, where the login/signup or redirect to MainPage will be.
          <MainPage />
    </div>
    );
  }
}

export default App;
