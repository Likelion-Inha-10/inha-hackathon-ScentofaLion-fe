import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import Router from 'routes';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from 'styles/GlobalStyles';

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router />
  </React.StrictMode>,
);

reportWebVitals();
