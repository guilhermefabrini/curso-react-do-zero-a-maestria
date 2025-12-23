// Import Estilo
import './App.css'

// Import Componentes
import MeuFormulario from './components/MeuFormulario'

function App() {

  return (
    <>
      <h2>Forms</h2>
      <MeuFormulario user={{ nome: "Guilherme", email: "gugafabrini@gmail.com" }} />
    </>
  )
}

export default App
