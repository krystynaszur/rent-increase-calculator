import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import './i18n'
import "react-tooltip/dist/react-tooltip.css";


const root = createRoot(document.getElementById('root'));
root.render(
  <App />
);

