const getUsers = () => (dispatch) => {
  return axios
    .get("/api/user/:id")
    .then((user) =>
      dispatch({
        type: GET_CURRENT_USER_SUCESS,
        payload: {
          user,
        },
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_CURRENT_USER_FAILURE,
        payload: {
          err,
        },
      })
    );
};
