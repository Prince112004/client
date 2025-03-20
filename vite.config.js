import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    host: '0.0.0.0', // Ensure it is accessible externally
    strictPort: true, // Ensures no other port is used
  },
  preview: {
    port: 8080,
    host: '0.0.0.0',
    strictPort: true,
    allowedHosts: 'all', // Allow all hosts to access it
  },
})
