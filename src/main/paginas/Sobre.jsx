import React, { Component } from 'react';

import DropDownMenu01 from '../componentes/DropDownMenu01';
import Header from '../Header'


class Sobre extends Component {

 render() {
 return (
    <div className="App">
      <Header titulo="Sobre" caminho="/" tituloBotao="Voltar para a página inicial"/>

      <DropDownMenu01/>

      <footer className="footer d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
       <p className="App-intro" tabIndex="0">
            Referencias para o desenvolvimento do projeto: <br/>
            https://egghead.io/courses/develop-accessible-web-apps-with-react<br/>
            Rocketseat: https://www.youtube.com/watch?v=-j7vLmBMsEU<br/>
            React; https://pt-br.reactjs.org/docs/accessibility.html

       </p>
      </footer>

    </div>
 );
 }
}export default Sobre;

