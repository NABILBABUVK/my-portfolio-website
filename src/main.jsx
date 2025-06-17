/**
 * @copyright 2025 Nabil's_portfolio
 * @license Apache-2.0
 **/
/**
 node modules
 **/
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

/**
 *components
 **/

import App from './App.jsx';
/**
 * css links
 **/
import './index.css';
import 'lenis/dist/lenis.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
