import '../index.html';
import '../styles/main.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/app';

createRoot(document.querySelector('#root')).render(<App />);
