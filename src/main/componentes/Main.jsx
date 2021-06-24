import React from 'react'
import './Main.css'

import Form01 from '../componentes/Form01'

function Main() {

  return (
    <main className="maincontent" >
    <section className="the_section">
      <p tabIndex="0">A acessibilidade da Web (também chamada de ** a11y **) é o design e a criação de sites que podem ser usados ​​por todos. O suporte à acessibilidade é necessário para permitir que tecnologias assistivas interpretem as páginas da web. React suporta totalmente a construção de sites acessíveis, muitas vezes usando técnicas HTML padrão. <br/>
      <small>Fonte: Documentação do React.</small></p>
      <p tabIndex="0" className="texto" >Quando o formulario abaixo é enviado um alert aparece e o texto de agradecimento aparece em seu lugar. Neste exemplo, após o envio do formulário o foco fica na frase de agradecimento para que o leitor de tela (ou qualquer tecnologia assistiva possa identificar e dar o feedback para o usuário.</p>
    </section>

    <Form01/>

  </main>
  )
}

export default Main
