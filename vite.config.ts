/// <reference types="vitest" />
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import { resolve } from 'path'
import tailwindcss from 'tailwindcss'
import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'


// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src/') }
    ],
  },
  css: {
    postcss: {
      plugins: [ tailwindcss, autoprefixer ],
    },
  },
  plugins: [
    Pages({
      exclude: [
        '**/components/**/*.tsx',
        '**/utils/**/*.ts',
        '**/atoms/**/*.ts',
        '**/utils/*.ts',
        '**/hooks/*.ts',
        '**/shared/*.ts',
      ],
    }),
    react(),
  ],
})
