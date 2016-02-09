import React, { Component } from 'react';
import { setContext, getContext } from 'react-simple-context';

export const connect = m => C => () => getContext(({ s, d }) => <C {...{ dispatch: d, ...m(s) }}/>);
export const noredux = (e, r, u, d, s, W, i) => (W = class extends Component { render() { i = this; return setContext({ s, d }, e); }},s = r({}, {}), d = a => typeof a === 'function' ? a(d, () => s) : (s = r(s, a), i.forceUpdate()), <W/>);
