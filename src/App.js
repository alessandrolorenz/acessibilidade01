import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css';

import Login from './main/paginas/Login'
import Sobre from './main/paginas/Sobre';
import Principal from './main/paginas/Principal'

function App() {

  return (
    <>
      <Switch>
        <Route path="/" exact={true} render={(props) => (
          <Principal {...props} />
        )} />
        <Route path="/sobre" exact={true} render={(props) => (
          <Sobre {...props} />
        )}
        />
        <Route path="/login" exact={true} render={(props) => (
          <Login {...props} />
        )} />
      </Switch>



      {/* <Header />
      <Main /> */}
    </>
  );
}

export default App;
