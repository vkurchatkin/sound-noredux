import 'babel-core/polyfill';
import 'fastclick';
import fetch from 'isomorphic-fetch';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import reducer from './reducers/index.js';
import { setContext } from 'react-simple-context';

require('../styles/main.scss');

let state = reducer({}, {});

function dispatch(action) {
  if (typeof action === 'function') {
    action(dispatch, () => state);
  } else {
    state = reducer(state, action);
    render();
  }
}

function render() {
  ReactDOM.render(
      setContext({ state, dispatch }, <App />),
      document.getElementById('main')
  );
}

render();
