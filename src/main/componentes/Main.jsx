import React from 'react'
import './Main.css'

import Form01 from '../componentes/Form01'

function Main() {

  return (
    <main className="maincontent" >
    <section className="the_section">
      <p tabIndex="0" className="texto" >Quando o formulario abaixo é enviado um alert aparece e o texto de agradecimento aparece em seu lugar. Neste exemplo, após o envio do formulário o foco fica na frase de agradecimento para que o leitor de tela (ou qualquer tecnologia assistiva possa identificar e dar o feedback para o usuário.</p>
    </section>

    <Form01/>

  </main>
  )
}

export default Main
