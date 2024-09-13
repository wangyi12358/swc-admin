import generouted from '@generouted/react-router/plugin';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import { resolve } from 'node:path';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src/') }],
  },
  css: {
    postcss: {
      // @ts-ignore
      plugins: [tailwindcss, autoprefixer],
    },
  },
  plugins: [generouted(), react()],
});
