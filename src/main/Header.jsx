import React from 'react'
import './Header.css';
import {Link} from 'react-router-dom'

export default class Header extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.children = props.children
    this.tituloDaPagina = React.createRef()
    this.timeOutId = null;
  }

  componentDidMount() {
    this.tituloDaPagina.current.focus()
  }

render() {      
    return (
      <header className="App-header">
        <h1 className="titulo" ref={this.tituloDaPagina} tabIndex="0">{this.props.titulo}</h1>
        {this.children}
        <Link 
          className="App-link"
          to={this.props.caminho}
        >
          {this.props.tituloBotao}
        </Link>
    </header>
    )
  }
}
