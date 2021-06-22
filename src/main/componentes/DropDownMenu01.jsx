import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import './DropDownMenu01.css'

export default class DropDownMenu01 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.timeOutId = null;
  }

  onBlurHandler = () => {
    this.timeOutId = setTimeout(() => {
      this.setState({
        isOpen: false
      })
    })
  }

  onFocusHandler = () => {
    clearTimeout(this.timeOutId)
  }

  onClickHandler = () => {
    this.setState(currentState => ({
      isOpen: !currentState.isOpen
    }));
  }

  render() {
    return (
      <nav>
      <div
        onBlur={this.onBlurHandler}
        onFocus={this.onFocusHandler}
      >
        <button
          onClick={this.onClickHandler}
          className="dropdown__button"
          aria-haspopup="true"
          aria-expanded={this.state.isOpen}
        >
          {this.props.title}
          <i className="arrow down"></i>
        </button>
        {this.state.isOpen && (
          <ul className="dropdown__options" role="tab" aria-label="lista de links">
            { this.props.links.map((link, i) => {
              return <li className="list__item" >
                <Link role="tabpanel" key={i} tabIndex="0" to={link.path}>{link.label}</Link>
              </li>
            })}
          </ul>
          // O atributo global tabindex indica se um elemento pode receber foco de entrada (se ele é focável), se e em qual posição ele deve fazer parte da navegação sequencial do teclado (geralmente com a tecla Tab, daí seu nome). https://developer.mozilla.org
        )}
      </div>
    </nav>

    )
  }
}
