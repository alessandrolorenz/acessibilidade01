import React, { Component } from 'react'
import FormInput from '../primitives/FormInput'

export default class Formulário extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      isUsernameValid: true,
      isPasswordValid: true
    }

    this.handleUsenameChange = this.handleUsenameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.validateForm = this.validateForm.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  

  handleUsenameChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }
  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  validateForm() {
    const { username, password } = this.state
    const isUsernameValid = !!username
    const isPasswordValid = !!password
    this.setState({
      isUsernameValid,
      isPasswordValid
    })
    return isUsernameValid && isPasswordValid
  }
  

  onSubmit() {
    const { history } = this.props
    const isFormValid = this.validateForm()
    if(isFormValid) {
      history.push('/principal')
    }

  }
  
  render() {
    const {isPasswordValid, isUsernameValid} = this.state
    return (
      <div className="login row align-items-center">
        <div className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5">
      <main>
        <div className="card bg-light">
          <h2 className="card-header">Login</h2>
          <div className="card-body">        
          <form>
            <fieldset>
              <FormInput
              id="field-username"
              type="text"
              name="username"
              label="Nome"
              isValid={isUsernameValid}
              onChange={this.handleUsenameChange}
              errorText="Insira um nome"
              isRequired
              />
              <FormInput
              id="field-password"
              type="password"
              name="Password"
              label="Senha"
              isValid={isPasswordValid}
              onChange={this.handlePasswordChange}
              errorText="Insira um password"
              helperText="Senhas distinguem entre maiúsculas e minúsculas"
              isRequired
              />
            </fieldset>

          <button type="button" className="btn btn-dark" onClick={this.onSubmit}>Entrar</button>  
            
          </form>
          </div>
        </div>
      </main>

        </div>

      </div>
)
  }
}
