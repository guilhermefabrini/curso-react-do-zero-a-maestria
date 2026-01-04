// Import Estilo
import './App.css'

// Import Componentes
import MeuFormulario from './components/MeuFormulario'
import ComponenteQualquer from './components/ComponenteQualquer'

function App() {

  return (
    <>
      <h2>Forms</h2>
      <MeuFormulario user={{ nome: "Guilherme", email: "gugafabrini@gmail.com", bio: "Sou um advogado", funcao: "admin" }} />
      {/* Criado para praticar a criação de componentes. */}
      <ComponenteQualquer />
    </>
  )
}

export default App
