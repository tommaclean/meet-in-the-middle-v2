

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
};

export const setShowFavMeetups = () => dispatch => {
  dispatch({ type: 'SET_SHOW_FAV_MEETUPS_START'})
  dispatch({ type: 'SET_SHOW_FAV_MEETUPS_SUCCESS'})
};

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
};

export const favoriteMeetup = (user, meetup) => dispatch => {
  console.log("You favorited a meetup!")
  dispatch({ type: 'CONFIRM_FAV_MEETUP_START'})
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({meetup: meetup, user: user})
};
  return fetch('http://localhost:3000/fav_meetups', requestOptions)
                .then(response => response.json())
                .then(() => {dispatch({ type: 'CONFIRM_FAV_MEETUP_SUCCESS'})
                })
                .catch(error => {
                  dispatch({ type: "CONFIRM_FAV_MEETUP_FAILURE", error: error });
                });
};

export const deleteFavorite = () => dispatch => {
  console.log("You just tried to delete a favorite!")
}
  

        

          
