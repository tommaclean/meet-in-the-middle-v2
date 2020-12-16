

export const getMeetups = () => dispatch => {
    dispatch({ type: "GET_MEETUPS_START" });
    // dispatch(getMeetupsStart());
    return fetch("https://localhost:3000/meetups")
      .then(res => res.json())
      .then(meetups => {
        console.log('getMeetups', meetups)
        dispatch({ type: "GET_MEETUPS_START" })
        dispatch({ type: "GET_MEETUPS_SUCCESS", meetups: meetups });
        })
        .catch(error => {
        dispatch({ type: "GET_MEETUPS_FAILURE", error: error });
      });
  };

  

        

          
