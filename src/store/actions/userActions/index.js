import superagent from 'superagent';

const url = 'http://localhost:8080/signup';

export const SIGN_UP = (userData, id) => {
  return {
    type: 'SIGN_UP',
    payload: {
      id,
      username: userData.username,
      password: userData.password,
    },
  };
};

export const signUp = (userData) => {
  return (dispatch) => {
    // async here APP_API_URL
    return superagent
      .post(url)
      .send(userData)
      .then((response) => {
        dispatch(SIGN_UP(userData, response.body));
      });
  };
};

export const logIn = (userData) => {
  return {
    type: 'LOG_IN',
    payload: {
      username: userData.username,
      password: userData.password,
    },
  };
};

export const logOut = () => {
  return {
    type: 'LOG_OUT',
    payload: {
      username: '',
      password: '',
    },
  };
};

export const updateUser = (userData) => {
  return {
    type: 'UPDATE_USER_DATA',
    payload: {
      username: userData.username,
      password: userData.password,
    },
  };
};
