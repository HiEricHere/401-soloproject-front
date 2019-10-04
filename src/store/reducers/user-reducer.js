const initState = {
  activeUser: false,
  user: {
    id: '',
    username: '',
    password: '',
  },
  error: '',
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'LOG_IN': // payload is user details, query database async
      return { ...state, activeUser: true, user: action.payload };
    case 'LOG_OUT': // payload user:{id,username,password} cleared
      return { ...state, activeUser: false, user: action.payload };
    case 'UPDATE_USER_DATA': // payload is user details, update database async 
      return { ...state, user: action.payload };
    case 'SIGN_UP': // payload username, password. Need to add ID to payload before reducer, update database async
      return { ...state, activeUser: true, user: action.payload };
    case 'ERROR':
      // eslint-disable-next-line no-console
      console.log(action.payload);
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
