import React, { Component } from 'react';
import{Link} from 'react-router-dom'

import '../../App.css';
import '../Header.css';

import DropDownMenu01 from '../componentes/DropDownMenu01';

class Sobre extends Component {
  constructor() {
    super() 
    this.state = {}
    this.tituloDaPagina = React.createRef()
  }

  componentDidMount() {
    this.tituloDaPagina.current.focus()
  }

 render() {
 return (
    <div className="App">
       <header className="App-header">
          <h1 className="titulo" ref={this.tituloDaPagina} tabIndex="0">Página de Sobre</h1>
          <Link className="App-link" to="/">
          Voltar para a página inicial
        </Link>
       </header>
       <p className="App-intro" tabIndex="0">
            Exemplo de Página Sobre
       </p>
       <DropDownMenu01/>
    </div>
 );
 }
}export default Sobre;

