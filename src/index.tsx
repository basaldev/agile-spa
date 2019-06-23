import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { subscribe, getState, State } from 'domain/store';
import { App } from './app';

function renderer(state: State) {
  ReactDOM.render(<App state={state} />, document.getElementById('root'));
}

subscribe(renderer);
renderer(getState());
