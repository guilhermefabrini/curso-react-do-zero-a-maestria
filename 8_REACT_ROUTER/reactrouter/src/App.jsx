import './App.css'

// Páginas
import Home from './pages/Home'
import About from './pages/About'

// Componentes
import Navbar from './components/Navbar'


// 1 - Configuração React Router
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar/> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>    
    </>
  )
}

export default App
