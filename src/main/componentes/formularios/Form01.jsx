import React, { useState, useEffect } from 'react'
import './form01.css'

function Form01() {
  const [field, setField] = useState('')
  const [submited, setSubmited] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmited(true)
    alert(
      `Isto é um alerta de que o formlario foi enviado com o valor: ${field}`,
    )
  }

  const agradecimento = React.createRef()

  useEffect(() => {
    if (agradecimento && agradecimento.current) {
      agradecimento.current.focus()
    }
  })
  // explicação use effect

  return submited ? (
    <p className="textoAgradecimento" ref={agradecimento} tabIndex="0">
      "Obrigado por se inscrever."
    </p>
  ) : (
    <form id="formulario01" className="formulario01" onSubmit={handleSubmit}>
      <label className="labelImputText" htmlFor="inputText">
        Enviar formulário
      </label>
      <input
        className="inputText"
        id="inputText"
        onChange={(event) => setField(event.target.value)}
        type="text"
      ></input>
      <button className="botao01" type="submit">
        Enviar
      </button>
    </form>
  )
}

export default Form01
