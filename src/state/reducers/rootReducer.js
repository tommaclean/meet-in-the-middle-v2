import { combineReducers } from "redux";
import meetups from './meetupsReducer'
import searchResults from './searchResultsReducer'


export default combineReducers({
  meetups,
  searchResults
});
