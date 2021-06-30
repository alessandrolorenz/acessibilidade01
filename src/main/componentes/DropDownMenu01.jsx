import React, { Component, createRef } from 'react'
import { Link } from 'react-router-dom'

import './DropDownMenu01.css'

export default class DropDownMenu01 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
    this.timeOutId = null

    this.refs = createRef()
    this.onSubmit = this.onSubmit.bind(this)
  }

  onBlurHandler = () => {
    this.timeOutId = setTimeout(() => {
      this.setState({
        isOpen: false,
      })
    })
  }

  onFocusHandler = () => {
    clearTimeout(this.timeOutId)
  }

  onClickHandler = () => {
    this.setState((currentState) => ({
      isOpen: !currentState.isOpen,
    }))
  }

  handleKeyDown(e) {
    console.log(e.keyCode)
    // 37 esq, 38 cima, 39 dir, 40 baixo (keyCodes)
    // Como fazer para selecionar (ou colocar o foco) no proximo elemento da lista <li>?
    // 1. Usar o estado?
    // 2. Controlar o item da lista pelo index (i)?
  }

  onSubmit() {

    const { history } = this.props

    history.push('/principal')
  }

  render() {
    return (
      <nav>
        <div onBlur={this.onBlurHandler} onFocus={this.onFocusHandler}>
          <button
            onClick={this.onClickHandler}
            className="dropdown__button"
            aria-haspopup="true"
            aria-expanded={this.state.isOpen}
            onKeyDown={this.handleKeyDown}
          >
            {this.props.title}
            <i className="arrow down"></i>
          </button>
          {this.state.isOpen && (
            <ul className="dropdown__options" aria-label="lista de links">
              {this.props.links.map((link, i) => {
                return (
                   <li className="list__item">
                   {/* <button type="submit" key={link.label} onClick={this.onSubmit }>{link.label}</button> */}
                    <Link key={link.label} tabIndex="0" to={link.path}>{link.label}</Link>
                  </li>
                )
              })}
            </ul>
            // O atributo global tabindex indica se um elemento pode receber foco de entrada (se ele é focável) https://developer.mozilla.org
          )}
        </div>
      </nav>
    )
  }
}
