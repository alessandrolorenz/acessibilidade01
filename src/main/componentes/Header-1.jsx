import React, { useEffect, useState } from 'react'
import './Header.css';
import '../styles/navigation.css'
import {Link} from 'react-router-dom'

export default function Header() {

  const [isOpen, setIsOpen ] = useState(false)

  const tituloDaPagina = React.createRef()

  let timeOutId = null;

  const onBlurHandler = () => {
    timeOutId = setTimeout(() => {
      setIsOpen(false)
    })
  }

  const onFocusHandler = () => {
    clearTimeout(timeOutId)
  }

  const onClickHandler = () => {
    setIsOpen(actualState => !actualState.isOpen)
    console.log(isOpen)
  }

  useEffect(() => {
    tituloDaPagina.current.focus()
  })

  return (
    <header className="App-header">

    <h1 className="titulo" ref={tituloDaPagina} tabIndex="0">Meu site acessivel</h1>
    <nav>
        <div 
        onFocus={onFocusHandler} 
        onBlur={onBlurHandler}>
          <button onClick={onClickHandler} className="dropdown_button">
            Selecione
            <i className="arrow down"></i>
            {isOpen && (
              <ul className="dropdown_option">
                <li>Opção 1 </li>
                <li>Opção 2 </li>
                <li>Opção 3 </li>
              </ul>
            )}
          </button>

        </div>
      </nav>
    
    <Link 
      className="App-link"
      to="/sobre"
    >
      Mais sobre este projeto
    </Link>
  </header>
  )
}
