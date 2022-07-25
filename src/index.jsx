import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import Router from 'routes';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from 'styles/GlobalStyles';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <GlobalStyle />
      <Router />
    </React.StrictMode>
  </Provider>,
);

reportWebVitals();
