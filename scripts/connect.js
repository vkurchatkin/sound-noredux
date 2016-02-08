import React, { Component } from 'react';

function connect(map) {
  return (Comp) => {

    class Wrapper extends Component {
      render() {
        const { state, dispatch } = this.context;
        const props = map(state);
        return <Comp {...{ dispatch, ...props }}/>;
      }
    }

    Wrapper.contextTypes = {
      state: React.PropTypes.object,
      dispatch: React.PropTypes.func
    };

    return Wrapper;
  }
}

export default connect;
