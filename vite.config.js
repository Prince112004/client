import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080, // Add this for dev
  },
  preview: {
    port: 8080, // Add this for preview on Render
  },
})
