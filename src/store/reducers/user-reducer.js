const initState = {
  activeUser: false,
  user: {
    id: null,
    username: null,
  },
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'SIGN_IN_SUCCESS': // { user:{id,username}, funPass }
      return { activeUser: true, user: { ...action.payload.user } };
    case 'SIGN_OUT':
      return { ...initState };
    case 'UPDATE_USER_DATA': // payload is user details, update database async 
      return { ...state, user: action.payload };
    case 'RESET_USER_STATE':
      return { ...initState };
    default:
      return state;
  }
};
