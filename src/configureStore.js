// import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../src/state/reducers/rootReducer'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['searchResults']
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = composeEnhancers(applyMiddleware(thunk));
const store = createStore(persistedReducer, middleware);
const persistor = persistStore(store);
export { persistor, store };


