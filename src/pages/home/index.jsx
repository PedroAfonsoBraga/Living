import React from 'react'
import { StyledContainer } from './style'
import logo from './../../assets/Living logo.png'
import destaque from './../../assets/destaque.png'

const HomePage = () => {
  return (
    <StyledContainer>
      <header><img src={logo} alt="Logo" /></header>
      <div className="destaque">
        <div className="destaque__esquerda">
          <h2>Cuidando de cada <span>detalhe</span> da sua casa</h2>
          <p>Trazendo uma nova e incrível experiência para você e para seu lar</p>
          <a href="#destaque">consumir conteúdo</a>
        </div>
        <div className="destaque__direita" id='destaque'>
          <img src={destaque} alt="fotoDestaque" />
        </div>
      </div>
      
    </StyledContainer>
  )
}

export default HomePage