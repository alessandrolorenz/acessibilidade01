import React from 'react'
import './Main.scss'

import Form01 from './componentes/Form01'
import Like01 from './componentes/images/Like01'

function Main() {

  return (
    <main className="maincontent" >
    
    <p className="box01" tabIndex="0">A acessibilidade da Web (também chamada de ** a11y **) é o design e a criação de sites que podem ser usados ​​por todos. O suporte à acessibilidade é necessário para permitir que tecnologias assistivas interpretem as páginas da web. React suporta totalmente a construção de sites acessíveis, muitas vezes usando técnicas HTML padrão.</p>
    <Like01 className="imagem"/>
    <p className="box03" tabIndex="0">Este é um teste aplicando algumas praticas para exercitar desenvolver pensando em acessibilidade com o react</p>
    <p className="box04" tabIndex="0">A idéia é tem uma boa navegação e inspecionando com o axe-core/react, um plugin para o Firefox que nos ajuda com questões de acessibilidade.</p>
    
    <Form01/>

  </main>
  )
}

export default Main
