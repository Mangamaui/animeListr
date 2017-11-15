
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';
import { Provider } from 'react-redux';
//lib stuff
import store, { history } from './lib/store';
import { saveState } from './lib/localStorage';
//components
import App from './App';
//styling
import './styling/style.css';

store.subscribe(() => {
  saveState({
    app: store.getState().app
  });
  console.log(store.getState());
});

ReactDOM.render(
  (<Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={App}/>
      </div>
    </ConnectedRouter>
  </Provider>), document.getElementById('root'));
registerServiceWorker();
