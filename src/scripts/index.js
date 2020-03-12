import '../index.html';

import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/app';

console.time();
ReactDOM.render(<App />, document.querySelector('#root'));
console.timeEnd();
