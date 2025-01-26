import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import './i18n'
import "react-tooltip/dist/react-tooltip.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <App />
);

