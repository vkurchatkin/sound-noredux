import React from 'react';
import { getContext } from 'react-simple-context';

export default map => C => () => getContext(({ state, dispatch }) => <C {...{ dispatch, ...map(state) }}/>);
