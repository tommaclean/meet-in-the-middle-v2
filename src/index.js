import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
// import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
// import thunk from 'redux-thunk';
// import rootReducer from '../src/state/reducers/rootReducer'
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from '../src/configureStore';
import { PersistGate } from 'redux-persist/integration/react'

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))



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