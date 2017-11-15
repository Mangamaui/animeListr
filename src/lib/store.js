import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';

import { routerReducer, routerMiddleware, push } from 'react-router-redux';

import reducers from '../reducers';
import { loadState } from '../lib/localStorage';

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadState();

export default createStore(
  combineReducers({
    ...reducers,
    router: routerReducer}),
  persistedState,
  composeEnhancers(applyMiddleware(thunk, middleware)),
);
