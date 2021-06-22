import React, { Component } from 'react'

import Header from '../Header'
import Main from '../Main'

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
          caminho="/" 
          tituloBotao="Voltar para página anterior"
        />
        <Main />
      </>
    )
  }
}
