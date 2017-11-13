import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';

import { loadState } from '../lib/localStorage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadState();

export default createStore(combineReducers(reducers), persistedState, composeEnhancers(applyMiddleware(thunk)),
);
