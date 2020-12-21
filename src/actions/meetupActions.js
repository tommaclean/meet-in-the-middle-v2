

export const getMeetups = () => dispatch => {
    dispatch({ type: "GET_MEETUPS_START" });
    return fetch("http://localhost:3000/meetups")
      .then(res => res.json())
      .then(meetups => {
        dispatch({ type: "GET_MEETUPS_START" })
        dispatch({ type: "GET_MEETUPS_SUCCESS", meetups: meetups });
        })
        .catch(error => {
        dispatch({ type: "GET_MEETUPS_FAILURE", error: error });
      });
};
  

export const setShowPastMeetups = () => dispatch => {
  dispatch({ type: 'SET_SHOW_PAST_MEETUPS_START'})
  dispatch({ type: 'SET_SHOW_PAST_MEETUPS_SUCCESS'})
}
  

        

          
