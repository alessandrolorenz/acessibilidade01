import React, { Component } from 'react'

export default class PaginaElementosApropriados extends Component {
  render() {
    return (
      <div>
              <h1>Links</h1>

              <p>Esse é um link para <a href="https://www.mozilla.org">Mozilla</a>.</p>

              <p>Outro link, para <a href="https://developer.mozilla.org">Mozilla Developer Network</a>.</p>

              <h2>Botões</h2>

              <p>
                <button data-message="Esse é do primeiro botão">Clique em mim!</button>
                <button data-message="Esse é do segundo botão">Clique em mim também!</button>
                <button data-message="Esse é do terceiro botão">E em mim!</button>
              </p>

              <h2>Formulário</h2>

              <form>
                <div>
                  <label for="name">Preencha com seu nome:</label>
                  <input type="text" id="name" name="name"/>
                </div>
                <div>
                  <label for="age">Preencha com a sua idade:</label>
                  <input type="text" id="age" name="age"/>
                </div>
                <div>
                  <label for="mood">Escolha o seu humor:</label>
                  <select id="mood" name="mood">
                    <option>Feliz</option>
                    <option>Triste</option>
                    <option>Bravo</option>
                    <option>Preocupado</option>
                  </select>
                </div>
              </form>
      </div>
    )
  }
}
