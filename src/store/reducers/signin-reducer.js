const initState = {
  status: true,
  notification: null,
};

const signInReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SIGN_IN_SUCCESS':
      return { ...initState };
    case 'SIGN_IN_FAIL':
      return { status: false, notification: `❎ Could not sign in: ${action.payload}` };
    case 'SIGN_IN_RESET':
      return { ...initState };
    default:
      return state;
  }
};

export default signInReducer;
