

export const getMeetups = () => dispatch => {
    dispatch({ type: "GET_MEETUPS_START" });
    return fetch("http://localhost:3000/meetups")
      .then(res => res.json())
      .then(meetups => {
        console.log('fetch from getMeetups', meetups)
        dispatch({ type: "GET_MEETUPS_START" })
        dispatch({ type: "GET_MEETUPS_SUCCESS", meetups: meetups });
        })
        .catch(error => {
        dispatch({ type: "GET_MEETUPS_FAILURE", error: error });
      });
  };

  

        

          
