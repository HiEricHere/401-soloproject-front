import { combineReducers } from 'redux';
import userReducer from './user-reducer';
import postReducer from './post-reducer';

const mainReducer = combineReducers({
  userReducer,
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
