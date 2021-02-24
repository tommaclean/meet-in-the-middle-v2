

export const getMeetups = () => dispatch => {
    dispatch({ type: "GET_MEETUPS_START" });
    return fetch("http://localhost:3000/meetups")
      .then(res => res.json())
      .then(meetups => {
        dispatch({ type: "GET_MEETUPS_SUCCESS", meetups: meetups });
        })
        .catch(error => {
        dispatch({ type: "GET_MEETUPS_FAILURE", error: error });
      });
};

export const getFavMeetups = () => dispatch => {
  dispatch({ type: "GET_FAV_MEETUPS_START" });
  return fetch("http://localhost:3000/fav_meetups")
    .then(res => res.json())
    .then(favMeetups => {
      dispatch({ type: "GET_FAV_MEETUPS_SUCCESS", favMeetups: favMeetups });
      })
      .catch(error => {
      dispatch({ type: "GET_FAV_MEETUPS_FAILURE", error: error });
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

export const confirmSelection = (locationInfo) => dispatch => {
  dispatch({ type: 'CONFIRM_SELECTED_LOCATION_START' })
      const requestOptions = {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': localStorage.token
       },
       body: JSON.stringify(locationInfo)
    };
   

  return fetch('http://localhost:3000/meetups/', requestOptions)
              .then(response => response.json())
              .then(() => {dispatch({ type: 'CONFIRM_SELECTED_LOCATION_SUCCESS'})})
              .then(getMeetups)
              .catch(error => {
                dispatch({ type: "CONFIRM_SELECTED_LOCATION_FAILURE", error: error });
              });
};

export const favoriteMeetup = (meetupId) => dispatch => {
  dispatch({ type: 'CONFIRM_FAV_MEETUP_START'})
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({meetup_id: meetupId, user_id: 1})
};
  return fetch('http://localhost:3000/fav_meetups', requestOptions)
                .then(response => response.json())
                .then(() => {dispatch({ type: 'CONFIRM_FAV_MEETUP_SUCCESS'})
                })
                .catch(error => {
                  dispatch({ type: "CONFIRM_FAV_MEETUP_FAILURE", error: error });
                });
};

export const deleteMeetup = (meetupId) => dispatch => {
  dispatch({ type: 'CONFIRM_DELETE_MEETUP_START'})
  const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
};
  return fetch(`http://localhost:3000/meetups/${meetupId}`, requestOptions)
                .then(() => {dispatch({ type: 'CONFIRM_DELETE_MEETUP_SUCCESS'})
                })
                .catch(error => {
                  dispatch({ type: "CONFIRM_DELETE_MEETUP_FAILURE", error: error });
                });
}

export const deleteFavorite = (favMeetupID) => dispatch => {
  dispatch({ type: 'CONFIRM_DELETE_FAV_MEETUP_START'})
  const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
};
  return fetch(`http://localhost:3000/fav_meetups/${favMeetupID}`, requestOptions)
                .then(() => {dispatch({ type: 'CONFIRM_DELETE_FAV_MEETUP_SUCCESS'})
                })
                .catch(error => {
                  dispatch({ type: "CONFIRM_DELETE_FAV_MEETUP_FAILURE", error: error });
                });
}
  

        

          
