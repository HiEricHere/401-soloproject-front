import { combineReducers } from 'redux';
import userReducer from './user-reducer';
import todoReducer from './todo-reducer';
import signUpReducer from './signup-reducer';
import signInReducer from './signin-reducer';

const mainReducer = combineReducers({
  userReducer,
  signUpReducer,
  signInReducer,
  todoReducer,
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
