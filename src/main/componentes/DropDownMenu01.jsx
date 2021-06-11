import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import './DropDownMenu01.css'

export default class DropDownMenu01 extends Component {
  constructor() {
    super()
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
          Browse
          <i className="arrow down"></i>
        </button>
        {this.state.isOpen && (
          <ul className="dropdown__options">
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/shop">Shop</Link></li>
          </ul>
        )}
      </div>
    </nav>

    )
  }
}
