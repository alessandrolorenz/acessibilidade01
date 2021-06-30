import React, { Component } from 'react'

import Header from '../componentes/header/Header'
import Main from '../componentes/principal/Main'

export default class Principal extends Component {
  constructor(props) {
    super(props)
    this.state = ''
  }
  render() {
    return (
      <>
        <Header 
          titulo="Simples site acessível" 
          tituloBotao="Outra página"
          caminho="/pagina" 
        />
        <Main />
      </>
    )
  }
}
