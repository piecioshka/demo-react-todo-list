import '../index.html';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/app';

console.time();
createRoot(document.querySelector('#root')).render(<App />);
console.timeEnd();
