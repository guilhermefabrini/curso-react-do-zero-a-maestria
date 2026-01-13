import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Componentes
import Navbar from './components/Navbar'

// Páginas
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'

import './App.css'

function App() {

  return (
    <>
      <h1>Context API</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
