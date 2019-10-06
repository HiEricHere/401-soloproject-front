import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/App/App';
import store from './store/index';

store.subscribe(() => {
  // eslint-disable-next-line no-console
  console.log('Store update:', store.getState());
});

const root = document.getElementById('root');

ReactDOM.render(<Provider store={store}><App /></Provider>, root);

/*
redux:
  createStore -> store
    const store = createStore(reducer, applyMiddleware(thunk))
  applyMiddleware -> createStore param
  combineReducers -> main/root-reducer.js combinedReducers({...});
react-redux:
  Provider -> index
  connect -> component
*/
