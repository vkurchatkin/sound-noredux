import React from 'react';
import { setContext, getContext } from 'react-simple-context';

export const connect = m => C => () => getContext(({ s, d }) => <C {...{ dispatch: d, ...m(s) }}/>);
export const noredux = (e, r, u, d, s) => (s = r({}, {}), d = a => typeof a === 'function' ? a(d, () => s) : (s = r(s, a), u()), () => setContext({ s, d }, e));
