import { combineReducers } from "redux";
import meetups from './meetupsReducer'
import searchResults from './searchResultsReducer'
import users from './usersReducer'
import maps from './mapsReducer'


const appReducer = combineReducers({
  meetups,
  searchResults,
  users,
  maps
});

const rootReducer = (state, action) => {

  if (action.type === 'USER_LOGOUT_START') {
    state = undefined;
  }

  return appReducer(state, action);
};


export default rootReducer



