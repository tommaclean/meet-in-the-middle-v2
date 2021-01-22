import { combineReducers } from "redux";
import meetups from './meetupsReducer'
import searchResults from './searchResultsReducer'
import user from './usersReducer'
import maps from './mapsReducer'


export default combineReducers({
  meetups,
  searchResults,
  user,
  maps
});
