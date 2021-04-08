import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from '../src/configureStore';
import { PersistGate } from 'redux-persist/integration/react'


ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </BrowserRouter>
    </Provider>), 
    document.getElementById('root')
);