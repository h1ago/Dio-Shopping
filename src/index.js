import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store'
import './index.css';
import { createGlobalStyle } from 'styled-components'
import resetCss from 'styled-reset'
import App from './App';

const GlobalStyle = createGlobalStyle`
    ${resetCss};
  `

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
