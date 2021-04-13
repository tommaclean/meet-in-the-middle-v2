export const actions = {
  GET_MEETUPS_SUCCESS: 'GET_MEETUPS_SUCCESS',
  GET_FAV_MEETUPS_SUCCESS: 'GET_FAV_MEETUPS_SUCCESS',
  SET_SHOW_PAST_MEETUPS_SUCCESS: 'SET_SHOW_PAST_MEETUPS_SUCCESS',
  CONFIRM_SELECTED_LOCATION_SUCCESS: 'CONFIRM_SELECTED_LOCATION_SUCCESS',
  CONFIRM_FAV_MEETUP_SUCCESS: 'CONFIRM_FAV_MEETUP_SUCCESS',
  SET_ERROR: 'SET_ERROR'
}

// export const getMeetups = () => dispatch => {
//     dispatch({ type: "GET_MEETUPS_START" });
//     const requestOptions = {
//       headers: {
//         "Authorization": localStorage.token
//       }
//   };
//     return fetch("http://localhost:3000/meetups", requestOptions)
//       .then(res => res.json())
//       .then(meetups => {
//         dispatch({ type: "GET_MEETUPS_SUCCESS", meetups: meetups });
//         })
//         .catch(error => {
//         dispatch({ type: "GET_MEETUPS_FAILURE", error: error });
//       });
// };
export const actionLog = action => ({
  type: action
})

const setMeetups = (meetups) => ({ type: actions.GET_MEETUPS_SUCCESS, meetups })

export const getMeetups = () => async (dispatch) => {
   const requestOptions = {
          headers: {
            "Authorization": localStorage.token
          }
   }
   try {
     const meetups = await fetch("http://localhost:3000/meetups", requestOptions).then(res => res.json())
     dispatch(setMeetups(meetups))
  } catch (e) {
     dispatch(actionLog(actions.SET_ERROR))
   }
};



export const getFavMeetups = () => dispatch => {
  dispatch({ type: "GET_FAV_MEETUPS_START" });
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': localStorage.token
    }
  };
  return fetch("http://localhost:3000/fav_meetups", requestOptions)
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
  console.log("favoriteMeetup")
  const requestOptions = {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': localStorage.token
    },

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
    headers: { 'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': localStorage.token
    }
};
  return fetch(`http://localhost:3000/fav_meetups/${favMeetupID}`, requestOptions)
                .then(() => {dispatch({ type: 'CONFIRM_DELETE_FAV_MEETUP_SUCCESS'})
                })
                .catch(error => {
                  dispatch({ type: "CONFIRM_DELETE_FAV_MEETUP_FAILURE", error: error });
                });
}
  

        

          
