import superagent from 'superagent';

const url = process.env.REACT_APP_URL;

// ACTIONS -----------------------------------------------------------

/* ===================================================================
 Sign up
=================================================================== */
export const SIGN_UP_FAIL = (error) => {
  return {
    type: 'SIGN_UP_FAIL',
    payload: error,
  };
};

const SIGN_UP_SUCCESS = (username) => {
  return {
    type: 'SIGN_UP_SUCCESS',
    payload: username,
  };
};
/* ===================================================================
 Sign in / Sign out
=================================================================== */
const SIGN_IN_FAIL = (error) => {
  return {
    type: 'SIGN_IN_FAIL',
    payload: error,
  };
};

const SIGN_IN_SUCCESS = (userData) => {
  return {
    type: 'SIGN_IN_SUCCESS',
    payload: {
      user: {
        id: userData.id,
        username: userData.username,
      },
    },
  };
};

export const SIGN_OUT = () => {
  return {
    type: 'SIGN_OUT',
  };
};
/* ===================================================================
 To do / misc
=================================================================== */
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

// ACTION CREATORS ----------------------------------------------------

// SIGN UP FORM
export const signUp = (userData) => {
  return (dispatch) => {
    // async here APP_API_URL
    return superagent
      .post(`${url}/signup`)
      .send(userData)
      .then((response) => {
        if (response.body.status) { // { status: true, message: username }
          const username = response.body.message;
          dispatch(SIGN_UP_SUCCESS(username));
        } else dispatch(SIGN_UP_FAIL(response.body.message.name)); 
      }) // { status: false, message: error }
      .catch((error) => {
        dispatch(SIGN_UP_FAIL(error));
      });
  };
};

// SIGN IN FORM
export const signIn = (credentials) => {
  return (dispatch) => {
    return superagent
      .post(`${url}/signin`)
      .set({ Authorization: `Basic ${btoa(`${credentials.username}:${credentials.password}`)}` })
      .then((response) => { // { status:bool, message: { id, username }, funPass: token }
        if (response.body.status) {
          const { message, funPass } = response.body;
          localStorage.setItem('funPass', funPass);
          dispatch(SIGN_IN_SUCCESS(message));
        } else dispatch(SIGN_IN_FAIL(response.body.message));
      })
      .catch((error) => {
        dispatch(SIGN_IN_FAIL(error));
      });
  };
};
