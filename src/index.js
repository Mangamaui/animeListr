import React from 'react';
import ReactDOM from 'react-dom';

import './styling/style.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';


import store from './lib/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  (<Provider store={store}>
  <App /></Provider>), document.getElementById('root'));
registerServiceWorker();
