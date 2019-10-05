import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// reducers
import mainReducer from './reducers/main-reducer';

const store = createStore(mainReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
