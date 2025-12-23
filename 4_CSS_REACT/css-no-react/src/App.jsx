// Imports em Geral
import { useState } from 'react'

// Imports de Estilos
import './App.css'

// Imports de Componentes
import CSSDeComponente from './components/CSSDeComponente'
import CSSModules from './components/CSSModules'

function App() {

  // CSS Inline dinâmico
  const n = 15
  const [nome] = useState("Guilherme")
  // ===================
  //  Classes dinâmicas
  const redTitle = true

  return (
    <>
      {/* CSS Global */}
      <h1>React com CSS</h1>
      {/* CSS de Componente */}
      <CSSDeComponente />
      {/* Inline CSS */}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>Este elemento foi estilizado de forma inline.</p>
      {/* CSS Inline dinâmico */}
      <h2 style={n < 10 ? {color: "red"} : {color: "blue"}}>CSS Dinâmico</h2>
      <h2 style={nome === "Guilherme" ? {color: "green"} : null}>Teste nome</h2>
      {/* Classes Dinâmicas */}
      <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica</h2>
      {/* CSS Modules */}
      <CSSModules />
    </>
  )
}

export default App
