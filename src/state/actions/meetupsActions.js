export const actions = {
  GET_MEETUPS_SUCCESS: 'GET_MEETUPS_SUCCESS',
  GET_FAV_MEETUPS_SUCCESS: 'GET_FAV_MEETUPS_SUCCESS',
  SET_SHOW_PAST_MEETUPS_SUCCESS: 'SET_SHOW_PAST_MEETUPS_SUCCESS',
  CONFIRM_SELECTED_LOCATION_SUCCESS: 'CONFIRM_SELECTED_LOCATION_SUCCESS',
  CONFIRM_FAV_MEETUP_SUCCESS: 'CONFIRM_FAV_MEETUP_SUCCESS',
  SET_ERROR: 'SET_ERROR'
}

export const actionLog = action => ({
  type: action
})

const setMeetups = (meetups) => ({ type: actions.GET_MEETUPS_SUCCESS, meetups: meetups })

export const getMeetups = () => async (dispatch) => {
   const requestOptions = {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
          }
   }
   try {
     await fetch("https://meet-in-the-middle-back-end.herokuapp.com/meetups", requestOptions)
     .then(res => res.json())
     .then(data => dispatch(setMeetups(data)))

  } catch (e) {
      
     dispatch(actionLog(actions.SET_ERROR))
   }
};


const setFavMeetups = (favMeetups) => ({ type: actions.GET_FAV_MEETUPS_SUCCESS, favMeetups})

export const getFavMeetups = () => async (dispatch) => {
    const requestOptions = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Authorization": `Bearer ${localStorage.token}`
      }
    };
    try {
        const favMeetups = await fetch("https://meet-in-the-middle-back-end.herokuapp.com/fav_meetups", requestOptions).then(res => res.json())
        dispatch(setFavMeetups(favMeetups))
    } catch (e) {
        dispatch(actionLog(actions.SET_ERROR))
    }
  };

export const setShowPastMeetups = () => dispatch => {
  dispatch({ type: 'SET_SHOW_PAST_MEETUPS_SUCCESS'})
};

export const setShowFavMeetups = () => dispatch => {
  dispatch({ type: 'SET_SHOW_FAV_MEETUPS_SUCCESS'})
};

export const confirmSelection = (locationInfo) => async (dispatch) => {
     
      const requestOptions = {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': localStorage.token
       },
       body: JSON.stringify(locationInfo)
    };
   
    try {
      await fetch('https://meet-in-the-middle-back-end.herokuapp.com/meetups/', requestOptions).then(response => response.json()).then(dispatch(getMeetups()))
      dispatch({ type: 'CONFIRM_SELECTED_LOCATION_SUCCESS'})
    } catch (e) {
      dispatch(actionLog(actions.SET_ERROR))
    }
};

export const favoriteMeetup = (meetupId) => async (dispatch) => {
  const requestOptions = {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': localStorage.token
    },

    body: JSON.stringify({meetup_id: meetupId})
  };
  try {
    fetch('https://meet-in-the-middle-back-end.herokuapp.com/fav_meetups', requestOptions).then(response => response.json())
    dispatch({ type: 'CONFIRM_FAV_MEETUP_SUCCESS'})
  } catch (e) {
    dispatch(actionLog(actions.SET_ERROR))
  }
};

export const deleteMeetup = (meetupId) => async (dispatch) => {
  const requestOptions = {
    method: 'DELETE',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': localStorage.token
    }
};

  try {
    await fetch(`https://meet-in-the-middle-back-end.herokuapp.com/meetups/${meetupId}`, requestOptions)
    dispatch({ type: 'CONFIRM_DELETE_MEETUP_SUCCESS'})
  } catch (e) {
    dispatch(actionLog(actions.SET_ERROR))
  }
}

export const deleteFavorite = (favMeetupID) => async (dispatch) => {
  const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': localStorage.token
    }
};

  try {
    await fetch(`https://meet-in-the-middle-back-end.herokuapp.com/fav_meetups/${favMeetupID}`, requestOptions)
    dispatch({ type: 'CONFIRM_DELETE_FAV_MEETUP_SUCCESS'})
  } catch (e) {
    dispatch(actionLog(actions.SET_ERROR))
  }
  
}
  

        

          
