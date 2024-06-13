import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':`https://server-omega-blond-77.vercel.app`,
    }
  },
  plugins: [react()],
})
