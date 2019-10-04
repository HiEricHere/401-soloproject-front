import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// reducers
import mainReducer from './reducers/main-reducer';

const store = createStore(mainReducer, applyMiddleware(thunk));

export default store;
