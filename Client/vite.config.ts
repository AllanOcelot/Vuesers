import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Allow vite to run an SSL instance on localhost.
import basicSsl from '@vitejs/plugin-basic-ssl'


// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions : {
      scss : {
        additionalData:  `
        @import "./src/assets/_transitions.scss";
        @import "./src/assets/_variables.scss";
        `
      }
    }
  },
  plugins: [basicSsl(), vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
