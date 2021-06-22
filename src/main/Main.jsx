import React from 'react'
import './Main.css'

import Form01 from './componentes/Form01'
import Like01 from './componentes/images/Like01'

function Main() {

  return (
    <main className="maincontent" >
    <session>
    <p className="box01" tabIndex="0">A acessibilidade da Web (também chamada de ** a11y **) é o design e a criação de sites que podem ser usados ​​por todos. O suporte à acessibilidade é necessário para permitir que tecnologias assistivas interpretem as páginas da web. React suporta totalmente a construção de sites acessíveis, muitas vezes usando técnicas HTML padrão. <br/>
    <small>Fonte: Documentação do React.</small><br/><br/>
    Este é um site bem simples e por enquanto não tem backend ou chamadas ao servidor. A idéia é fazer ele navegável pelo teclado (usando o a tecla de tab) e cobrir algumas diretrizes de acessibilidade do WCAG.<br/><br/>
    Primeiramente haverá concentração nas funcionalidades para depois então me preocupar com o layout em um segundo momento. O código está disponível no Github e hospedado no Heroku.</p>
    {/* <Like01 className="imagem"/> */}
    </session>

    {/* <section className="lista">
    <h2>Alguns desafios propostos são:</h2>
    <lu className="box04" tabIndex="0">
      <li>Usar HTML semântico</li>
      <li>Tornar as páginas navegaveis pelo teclado.</li>
      <li>inspecionar com o axe-core/react, Tota11y e WCAG color contrast checker.</li>
      <li>Deixar o foco linear de forma que seja possível navegar sem se perder pelas páginas.</li>
      <li>Fazer um formulário com foco na mensagem de resposta do envio.</li>
      <li>Fazer um formulário de login que apresente os erros de formulário (exemplo: campo não preenchido).</li>
      <li>Fazer um dropdown menu em que seja fechado quando o foco estiver no próximo elemento da página. </li>
      <li>Usar ARIA roles, states e properties.</li>
      <li>Fazer o site em React.</li>
      <li>Integrar ele com o Github e Heroku para fazer deploy.</li>
    </lu>
    </section> */}

    <Form01/>

  </main>
  )
}

export default Main
