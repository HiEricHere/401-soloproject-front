import { combineReducers } from 'redux';
import userReducer from './user-reducer';
import postReducer from './post-reducer';
import signUpReducer from './signup-reducer';

const mainReducer = combineReducers({
  userReducer,
  signUpReducer,
  postReducer,
});

export default mainReducer;

// const initState = {
//   activeUser: false,
//   user: {
//     id: '',
//     username: '',
//     password: '',
//     loggedIn: false,
//     friends: {},
//   },
//   posts: {},
//   signUpForm: {},
// };
