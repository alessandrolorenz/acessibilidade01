import React from 'react'
import './Main.css'

import Form01 from './componentes/Form01'

function Main() {

  return (
    <main className="maincontent" >
    <section>
    <p className="box01" tabIndex="0">A acessibilidade da Web (também chamada de ** a11y **) é o design e a criação de sites que podem ser usados ​​por todos. O suporte à acessibilidade é necessário para permitir que tecnologias assistivas interpretem as páginas da web. React suporta totalmente a construção de sites acessíveis, muitas vezes usando técnicas HTML padrão. <br/>
    <small>Fonte: Documentação do React.</small><br/><br/>
    Este é um site bem simples e por enquanto não tem backend ou chamadas ao servidor. A idéia é fazer ele navegável pelo teclado (usando o a tecla de tab) e cobrir algumas diretrizes de acessibilidade do WCAG.<br/><br/>
    Primeiramente haverá concentração nas funcionalidades para depois então me preocupar com o layout em um segundo momento. O código está disponível no Github e hospedado no Heroku.</p>
    {/* <Like01 className="imagem"/> */}
    </section>

    <Form01/>

  </main>
  )
}

export default Main
