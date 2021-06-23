import React, { Component } from 'react';

import './PaginaDropdown.css'
import DropDownMenu01 from '../componentes/DropDownMenu01';
import Header from '../Header'

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
      <Header  titulo="Página inicial" caminho="/pagina" tituloBotao="Navegação para outra página">
      <DropDownMenu01 title="Primeiro Menu" links={linksNemu1}/>
      <DropDownMenu01 title="Segundo Menu"  links={linksNemu2}/>
      </Header>
      <main>
        <div className="main__content">
          <h2>Conteúdo Lorem 50</h2>
          <p>Estas páginas representam alguns desafios sendo alguns deles:<br/>
              Usar HTML semântico;
              Tornar as páginas navegaveis pelo teclado;
              inspecionar com o axe-core/react, Tota11y e WCAG color contrast checker;
              Deixar o foco linear de forma que seja possível navegar sem se perder pelas páginas.
              Fazer um formulário com foco na mensagem de resposta do envio;
              Fazer um formulário de login que apresente os erros de formulário (exemplo: campo não preenchido);
              Fazer um dropdown menu em que seja fechado quando o foco estiver no próximo elemento da página;
              Usar ARIA roles, states e properties;
              Fazer o site em React;
              Integrar ele com o Github e Heroku para fazer deploy;
              E TODOS OS DESAFIOS DE TENTAR MELHORAR E APRENDER.</p>
        </div>
      </main>

      <footer className="footer">
       <p className="App-intro" tabIndex="0">
            Referencias para o desenvolvimento do projeto: <br/>
            https://egghead.io/courses/develop-accessible-web-apps-with-react<br/>
            Rocketseat: https://www.youtube.com/watch?v=-j7vLmBMsEU<br/>
            React; https://pt-br.reactjs.org/docs/accessibility.html<br/>
            https://www.youtube.com/watch?v=pOmdL9LzDJg

       </p>
      </footer>

    </div>
 );
 }
}

export default Sobre;

