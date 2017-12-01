import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Redirect } from 'react-router';
import { requireAuth } from '../lib/general';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    requireAuth() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
);

export default PrivateRoute;
