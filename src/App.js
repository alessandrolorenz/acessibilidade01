import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css';

import PaginaDropdown from './main/paginas/PaginaDropdown';
import Principal from './main/paginas/Principal'

function App() {

  return (
    <>
      <Switch>
        <Route path="/" exact={true} render={(props) => (
          <PaginaDropdown {...props} />
        )}
        />
        <Route path="/pagina" exact={true} render={(props) => (
          <Principal {...props} />
        )} />
      </Switch>
    </>
  );
}

export default App;
