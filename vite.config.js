import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.', // Ensure Vite knows where the root is
  build: {
    outDir: 'dist', // Ensure output goes to the dist folder
  },
})
