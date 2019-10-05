const initState = {
  activeUser: false,
  error: null,
  user: {
    id: null,
    username: null,
    password: null,
  },
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'LOG_IN': // payload is user details, query database async
      return { activeUser: true, user: action.payload, error: false };
    case 'LOG_OUT':
      return { ...initState };
    case 'UPDATE_USER_DATA': // payload is user details, update database async 
      return { ...state, user: action.payload };
    case 'SIGN_UP': // payload username, password. Need to add ID to payload before reducer, update database async
      return { ...state, activeUser: true, user: action.payload };
    case 'RESET_USER_STATE':
      return { ...initState };
    case 'ERROR_MSG':
      // eslint-disable-next-line no-console
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
};
