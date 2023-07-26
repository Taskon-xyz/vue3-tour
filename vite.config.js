import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib.js'),
      name: 'Vue3Tour2'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        assetFileNames: `vue3-tour2.[ext]`,
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [vue()]
})
