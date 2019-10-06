// this will handle the signup form state
const initState = {
  success: null,
  notification: null,
};

const signUpReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SIGN_UP_FAIL':
      return { success: false, notification: `❎ Error: ${action.payload}` };
    case 'SIGN_UP_SUCCESS': // payload username, password. Need to add ID to payload before reducer, update database async
      return { success: true, notification: `✅ Account successfully created, ${action.payload}.` };
    case 'SIGN_UP_RESET':
      return { ...initState };
    default:
      return state;
  }
};

export default signUpReducer;
