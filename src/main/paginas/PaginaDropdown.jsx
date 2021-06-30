import React, { Component } from 'react'

import '../../styles/PaginaDropdown.css'
import DropDownMenu01 from '../componentes/DropDownMenu01'
import Header from '../componentes/header/Header'

class PaginaDropdownMenu extends Component {
  render() {
    const linksNemu1 = [
      { label: 'Link_01', path: '/' },
      { label: 'Link_02', path: '/principal' },
    ]
    const linksNemu2 = [
      { label: 'Link_03', path: '/' },
      { label: 'Link_04', path: '/principal' },
      { label: 'Link_05', path: '/pagina' },
    ]

    return (
      <div className="App">
        <Header
          titulo="Página inicial"
          caminho="/principal"
          tituloBotao="Navegação para outra página"
        >
          <DropDownMenu01
            title="Primeiro Menu"
            links={linksNemu1}
            {...this.props}
          />
          <DropDownMenu01
            title="Segundo Menu"
            links={linksNemu2}
            {...this.props}
          />
        </Header>

          <main>
            <div className="main__content">
              <h2>Dropdown menus selecionaveis pela tecla TAB</h2>
              <p tabIndex="0">
                Nos dois dropdown menus do header foram usadas funçoes para as
                propriedades onBlur (onBlur=this.onBlurHandler) e onFocus
                (onFocus=this.onFocusHandler) para o tratamento quando o TAB
                seleciona outro elemento fechando o dropdown menu.
              </p>
            </div>
          </main>


        <footer className="footer">
          <p className="App-intro" tabIndex="0">
            Projeto Experimental - Alessandro Lorenz
          </p>
        </footer>
      </div>
    )
  }
}

export default PaginaDropdownMenu
