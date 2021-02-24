import { combineReducers } from "redux";
import meetups from './meetupsReducer'
import searchResults from './searchResultsReducer'
import users from './usersReducer'
import maps from './mapsReducer'


const appReducer = combineReducers({
  /* your app’s top-level reducers */
  meetups,
  searchResults,
  users,
  maps
});

const rootReducer = (state, action) => {
  // when a logout action is dispatched it will reset redux state
  if (action.type === 'USER_LOGOUT_START') {
    state = undefined;
  }

  return appReducer(state, action);
};


export default rootReducer



