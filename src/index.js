import React from 'react';
import ReactDOM from 'react-dom';

import store from './Store.js';
import Provider from './Provider.js';
import ControlPanel from './views/ControlPanel.js';
import * as serviceWorker from './serviceWorker';

import './index.css';

ReactDOM.render(
  <Provider store={store} >
    <ControlPanel />
  </Provider>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
