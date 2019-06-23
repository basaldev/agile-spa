import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { subscribe, getState, State } from 'domain/store';
import { onInit } from 'domain/middleware';
import { App } from './app';

function renderer(state: State): void {
  ReactDOM.render(<App state={state} />, document.getElementById('root'));
}

onInit();
subscribe(renderer);
renderer(getState());
