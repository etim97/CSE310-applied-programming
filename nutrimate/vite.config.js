import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        recipe: resolve(__dirname, 'recipe.html'),
        nutrition: resolve(__dirname, 'nutrition.html'),
      },
    },
  },
})