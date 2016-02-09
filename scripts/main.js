import 'babel-core/polyfill';
import 'fastclick';
import fetch from 'isomorphic-fetch';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import reducer from './reducers/index.js';
import { noredux } from './noredux.js';

require('../styles/main.scss');

ReactDOM.render(
  noredux(<App/>, reducer),
  document.getElementById('main')
);
