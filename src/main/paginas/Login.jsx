import React, { Component } from 'react'

import Form02 from '../componentes/formularios/Form02'

class Login extends Component {
  render() {
    return (
      <>
        <div className="formulario02">
          <p className="descricao" >Formulario de login - Só verifica se não está vazio e dá feedback para leitores de tela</p>
          <Form02 {...this.props} />
        </div>
      </>
    )
  }
}

export default Login
