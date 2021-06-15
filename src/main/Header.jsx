import React from 'react'
import './Header.css';
import {Link} from 'react-router-dom'

export default class Header extends React.Component{
  constructor() {
    super()
    this.state = {
      isOpen: false
    }
    this.tituloDaPagina = React.createRef()
    this.timeOutId = null;
  }

  componentDidMount() {
    this.tituloDaPagina.current.focus()
  }

render() {      
    return (
      <header className="App-header">
  
    <h1 className="titulo" ref={this.tituloDaPagina} tabIndex="0">Meu site acessivel</h1>
   
      <Link 
        className="App-link"
        to="/sobre"
      >
        Mais sobre este projeto
      </Link>
    </header>
    )
  }
}
