import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    host: '0.0.0.0',
    strictPort: true,
  },
  preview: {
    port: 8080,
    host: '0.0.0.0',
    strictPort: true,
    allowedHosts: true, // Allow all hosts
  },
})
