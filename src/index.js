import React from 'react';
import ReactDOM from 'react-dom';

import './styling/style.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import store from './lib/store';
import { saveState } from './lib/localStorage';
import { Provider } from 'react-redux';

store.subscribe(() => {
  saveState({
    app: store.getState().app
  });
  console.log(store.getState());
});

ReactDOM.render(
  (<Provider store={store}>
  <App /></Provider>), document.getElementById('root'));
registerServiceWorker();
