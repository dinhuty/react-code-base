// Libs
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// Components, Layouts, Pages
import App from '~/App';
import { GlobalStyles } from '~/components/common';
// Others
import store from '~/redux/store';
import reportWebVitals from './reportWebVitals';
import './utils/i18n';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles>
        <App />
      </GlobalStyles>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
