export const handleLogin = (userInput) => dispatch => {
    dispatch({ type: 'USER_LOGIN_START' })
        let requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({"username": userInput.username, "password": userInput.password})
        };

        return fetch("http://localhost:3000/login", requestOptions)
        .then(response => response.json())
        .then(() => {dispatch({ type: 'USER_LOGIN_SUCCESS', currentUser: userInput.username })
                })
                .catch(error => {
                  dispatch({ type: "USER_LOGIN_FAILURE", error: error });
                });
};
