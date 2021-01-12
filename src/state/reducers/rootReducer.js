import { combineReducers } from "redux";
import meetups from './meetupsReducer'
import searchResults from './searchResultsReducer'
import user from './userReducer'


export default combineReducers({
  meetups,
  searchResults,
  user
});
