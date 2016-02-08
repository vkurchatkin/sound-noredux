import 'babel-core/polyfill';
import 'fastclick';
import fetch from 'isomorphic-fetch';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import reducer from './reducers/index.js';

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

class Wrapper extends Component {
  getChildContext() {
    return { state, dispatch };
  }

  render() {
    return React.Children.only(this.props.children);
  }
}

Wrapper.childContextTypes = {
  state: React.PropTypes.object,
  dispatch: React.PropTypes.func
};

function render() {
  ReactDOM.render(
      <Wrapper>
        <App />
      </Wrapper>
      ,
      document.getElementById('main')
  );
}

render();
