import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/pokeapi': {
        target: 'https://pokeapi.co',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/pokeapi/, '')
      }
    }
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test-setup.ts']
  }
})
