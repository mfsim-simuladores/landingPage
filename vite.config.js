import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: "https://mfsim-simuladores.github.io/landingPage",
  plugins: [react()],
})
