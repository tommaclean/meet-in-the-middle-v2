import { combineReducers } from "redux";
import meetupsReducer from './meetupsReducer'


export default combineReducers({
  meetups: meetupsReducer,
});
