import allReducers from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const componseEnhancer = process.browser && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  allReducers,
  componseEnhancer(applyMiddleware(thunk)));

export default store;
