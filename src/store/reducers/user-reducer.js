const initState = {
  activeUser: false,
  token: null,
  user: {
    id: null,
    username: null,
    password: null,
  },
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'LOG_IN': // payload is user details, query database async
      return { activeUser: true, user: action.payload };
    case 'LOG_OUT':
      return { ...initState };
    case 'UPDATE_USER_DATA': // payload is user details, update database async 
      return { ...state, user: action.payload };
    case 'RESET_USER_STATE':
      return { ...initState };
    default:
      return state;
  }
};
