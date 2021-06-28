import React, { Component } from 'react';

import './PaginaDropdown.css'
import DropDownMenu01 from '../componentes/DropDownMenu01';
import Header from '../componentes/Header'

class Sobre extends Component {
  
  render() {
   const linksNemu1 = [
     {label: "Link_01", path: "/link1" },
     {label: "Link_02", path: "/link2" },
    ]
   const linksNemu2 = [
     {label: "Link_03" , path: "/link3" },
     {label: "Link_04", path: "/link4" },
     {label: "Link_05", path: "/link5" },
    ]



 return (
    <div className="App">
      <Header  titulo="Página inicial" caminho="/principal" tituloBotao="Navegação para outra página">
      <DropDownMenu01 title="Primeiro Menu" links={linksNemu1}/>
      <DropDownMenu01 title="Segundo Menu"  links={linksNemu2}/>
      </Header>
      <main>
        <div className="main__content">
          <h2>Dropdown menus selecionaveis pela tecla TAB</h2>
          <p>Nos dois dropdownd menus do header foram usadas funçoes para as propriedades onBlur (onBlur=this.onBlurHandler) e onFocus (onFocus=this.onFocusHandler) para o tratamento quando o TAB seleciona outro elemento fechando o dropdown menu.</p>
        </div>
      </main>

      <footer className="footer">
       <p className="App-intro" tabIndex="0">
Projeto Experimental - Alessandro Lorenz

       </p>
      </footer>

    </div>
 );
 }
}

export default Sobre;

