import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './stores';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { Board } from './pages/board';
import theme from './constants/theme';
import reportWebVitals from './reportWebVitals';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Board />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
