import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuração do TailWind
// - Importar plugin do Tailwind conforme abaixo:
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Adicionar função do Tailwind ao lado do plugin do react abaixo.
  // Depois, siga a configuração do Tailwind no arquivo index.css
  plugins: [react(), tailwindcss()],
})
