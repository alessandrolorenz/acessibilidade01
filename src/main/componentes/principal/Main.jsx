import React from 'react'
import './Main.css'

import Form01 from '../formularios/Form01'

function Main() {

  return (
    <main className="maincontent" >
    <section className="the_section">
      <p tabIndex="0" className="texto" >O formulario abaixo dispara um alert depois surge texto de agradecimento que fica com foco para que o leitor de tela (ou qualquer tecnologia assistiva) possa identificar e dar o feedback para o usuário. (ex.: Subscribe form)</p>
    </section>
    
    <Form01/>

  </main>
  )
}

export default Main
