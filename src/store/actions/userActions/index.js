import superagent from 'superagent';

const url = 'http://localhost:8080/signup';

// actions

const ERROR_MSG = (error) => {
  return {
    type: 'ERROR_MSG',
    payload: {
      error,
    },
  };
};

const SIGN_UP = (userData, status) => {
  return {
    type: 'SIGN_UP',
    payload: {
      status,
      username: userData.username,
      password: userData.password,
    },
  };
};

export const LOG_IN = (userData) => {
  return {
    type: 'LOG_IN',
    payload: {
      username: userData.username,
      password: userData.password,
    },
  };
};

export const LOG_OUT = () => {
  return {
    type: 'LOG_OUT',
  };
};

export const RESET_USER_STATE = () => {
  return {
    type: 'RESET_USER_STATE',
  };
};

export const UPDATE_USER_DATA = (userData) => {
  return {
    type: 'UPDATE_USER_DATA',
    payload: {
      username: userData.username,
      password: userData.password,
    },
  };
};


// action creators

export const signUp = (userData) => {
  return (dispatch) => {
    // async here APP_API_URL
    return superagent
      .post(url)
      .send(userData)
      .then((response) => {
        if (response.body.status) {
          dispatch(SIGN_UP(userData, response.body.message));
        } else dispatch(ERROR_MSG(response.body.message.name)); // { status: false, message: error }
      })
      .catch((error) => {
        dispatch(ERROR_MSG(error));
      });
  };
};

// log in
// log out
// update user details
