import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT ? parseInt(process.env.PORT) : 5173,
    allowedHosts: [
      'mekaddesh.shop',
      'localhost',
      '.railway.app',
      '.up.railway.app'
    ]
  },
  server: {
    host: '0.0.0.0',
    port: 5173
  }
})

