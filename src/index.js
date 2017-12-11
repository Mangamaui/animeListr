
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
//lib stuff
import store, { history } from './lib/store';
import { saveState } from './lib/localStorage';
//components
import App from './App';
import { Home, Login, Signup } from './components/Views.js';
import UserCollection from './components/UserCollection';
import PrivateRoute from './components/PrivateRoute';

//styling
import './styling/style.css';

store.subscribe(() => {
  saveState({
    app: store.getState().app
  });
});


ReactDOM.render(
  (<Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <PrivateRoute path='/userCollection' component={UserCollection} />
        </Switch>
      </App>
    </ConnectedRouter>
  </Provider>), document.getElementById('root'));
registerServiceWorker();
