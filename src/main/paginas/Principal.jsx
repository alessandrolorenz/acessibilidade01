import React, { Component } from 'react'

import Header from '../componentes/Header'
import Main from '../componentes/Main'

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
          caminho="/pagina" 
          tituloBotao="Outra página"
        />
        <Main />
      </>
    )
  }
}
