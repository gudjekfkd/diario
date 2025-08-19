import { useState } from 'react'
import './App.css'
import Perfil from './components/Perfil'

function App() {

  return (
    <>
      <Perfil nome="gustavo" profissao="aluno" />
      <Projetos />
    </>
  )
}

export default App