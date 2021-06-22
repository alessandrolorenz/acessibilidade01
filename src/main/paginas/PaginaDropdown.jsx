import React, { Component } from 'react';

import './PaginaDropdown.css'
import DropDownMenu01 from '../componentes/DropDownMenu01';
import Header from '../Header'


class Sobre extends Component {
  
  render() {
   const linksNemu1 = [
     {label: "Link 01", path: "/link1" },
     {label: "Link 02", path: "/link2" },
    ]
   const linksNemu2 = [
     {label: "Link 03" , path: "/link3" },
     {label: "Link 04", path: "/link4" },
     {label: "Link 05", path: "/link5" },
    ]



 return (
    <div className="App">
      <Header  titulo="Página inicial" caminho="/pagina" tituloBotao="Navegação para outra página">
      <DropDownMenu01 title="Dropdown menu 1" links={linksNemu1}/>
      <DropDownMenu01 title="Dropdown menu 2"  links={linksNemu2}/>
      </Header>
      <main>
        <div className="main__content">
          <h2>Conteúdo Lorem 50</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae culpa nobis sunt optio sit quas ut aliquam labore laboriosam corrupti excepturi aut quaerat totam placeat nemo modi provident quia vitae magnam explicabo tempora saepe, debitis maiores dolor? Libero, modi distinctio? Beatae nesciunt sit voluptate temporibus optio consequatur officia possimus architecto?</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam culpa totam adipisci dignissimos expedita nesciunt praesentium illum assumenda harum voluptatibus magni dolores sit, asperiores saepe ducimus? Blanditiis ut voluptatum ratione excepturi consectetur quisquam nisi cum ipsa sint ex sed tempora maxime quis placeat ab itaque minima ipsam impedit quam unde enim labore porro, nobis dolorem? Eaque, voluptatem excepturi maiores tempore nostrum, quasi deserunt laudantium molestias voluptate fuga vero rerum! Incidunt excepturi cum corrupti molestias accusantium voluptatibus omnis tempore architecto voluptatum?</p>
        </div>
      </main>


      <footer className="footer">
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

