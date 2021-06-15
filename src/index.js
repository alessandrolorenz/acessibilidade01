import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import './index.css';
import App from './App';
import Sobre from './main/paginas/Sobre';
import Login from './main/paginas/Login'

if (process.env.NODE_ENV !== 'production') {
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/" exact={true} component={App} />
    <Route path="/sobre" exact={true} component={Sobre} />
    <Route path="/login" exact={true} component={Login} />
    <Route path='*' component={App} />
  </Switch>
    
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
