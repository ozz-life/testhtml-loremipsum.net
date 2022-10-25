import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, './src')}/`,
      '@fonts/': `${path.resolve(__dirname, './src/assets/fonts')}/`,
      '@images/': `${path.resolve(__dirname, './src/assets/images')}/`
    }
  },
  base: './',
})
