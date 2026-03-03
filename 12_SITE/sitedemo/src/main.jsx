import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// O index.css precisa estar importado aqui para o Tailwind funcionar
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
