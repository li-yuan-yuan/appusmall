import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./assets/css/reset.css"
import "./assets/js/rem"
import store from "./store"
import { HashRouter } from "react-router-dom"
import { Provider } from "react-redux"
// 移动端样式
import 'antd-mobile/dist/antd-mobile.css';
ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
  ,
  document.getElementById('root')
);