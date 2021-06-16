import React, { Component } from 'react'

export default class Formulário extends Component {

  constructor() {
    super()
    this.state = {
      field:''
    }
    this.handleUsenameChanche = (e) => {
      console.log(e.target.value);
    }
    this.handlePasswordChanche = (e) => {
      console.log(e);
    }
  }
  
  
  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="username-input">Usename</label>
          <input 
            id="username-input"
            type="text" 
            name="usename"
            className="usernameClasses"
            onChange={this.handleUsenameChanche} />
          <div className="invalid-feedback">
            Por favor preencha o nome
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="password-input">Password</label>
          <input 
            id="password-input"
            type="password" 
            name="password"
            className="passwordClasses"
            onChange={this.handlePasswordChanche} />
            <small className="form-text text-muted">
            A senha diferencia maiúsculas de minúsculas
            </small>
          <div className="invalid-feedback">
            Senha inválida
          </div>
        </div>
      </form>
    )
  }
}
