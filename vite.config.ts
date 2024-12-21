import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
})
