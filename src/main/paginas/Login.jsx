import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import Form02 from '../componentes/Form02'


class Login extends Component {

  render() {
    return (
      <div className="App">
      <header className="App-header">
         <Link to="/">
         <h1 className="titulo" ref={this.tituloDaPagina} tabIndex="0">Página de Sobre</h1>
       </Link>
      </header>
      <Form02 {...this.props}/>
   </div>
    )
  }
}

export default Login