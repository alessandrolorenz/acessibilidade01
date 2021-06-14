import React, { Component } from 'react'

export default class Formulário extends Component {

  constructor() {
    super()
    this.state = {
      field:''
    }
    this.handleUsenameChanche = (e) => {
      console.log(e);
    }
    this.handlePasswordChanche = (e) => {
      console.log(e);
    }
  }
  
  
  render() {
    return (
      <form>
        <div className="form-group">
          <label>Usename</label>
          <input 
            type="text" 
            name="usename"
            className="usernameClasses"
            onChange={this.handleUsenameChanche} />
          <div className="invalid-feedback">
            Por favor preencha o nome
          </div>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            name="password"
            className="passwordClasses"
            onChange={this.handlePasswordChanche} />
          <div className="invalid-feedback">
            A senha diferencia maiúsculas de minúsculas
          </div>
        </div>
      </form>
    )
  }
}
