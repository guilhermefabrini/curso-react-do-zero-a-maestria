import './App.css'

// router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// pages
import Home from './pages/Home/Home'

function App() {

  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
