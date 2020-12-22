

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

export const confirmSelection = (name, creator) => dispatch => {
  dispatch({ type: 'CONFIRM_SELECTED_LOCATION_START' })
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({creator: creator, location: name})
    };

  return fetch('http://localhost:3000/meetups/', requestOptions)
              .then(response => response.json())
              .then((meetup) => {dispatch({ type: 'CONFIRM_SELECTED_LOCATION_SUCCESS'})})
              .then(getMeetups)
        }
  

        

          
