/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import Pages from 'vite-plugin-pages'
import { resolve } from 'path'
// import { viteMockServe } from 'vite-plugin-mock'


// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src/') }
    ],
  },
  plugins: [
    Pages(),
    react(),
    // viteMockServe({
    //   mockPath: './mock/',
    //   enable: true,
    // })
  ],
})
