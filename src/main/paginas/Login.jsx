import React, { Component } from 'react'

import Form02 from '../componentes/Form02'


class Login extends Component {

  render() {
    return (
      <div className="formulario02">
      <Form02 {...this.props}/>
   </div>
    )
  }
}

export default Login 