import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/2021-F2E-Week2/',
  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, "src")}/`,
    }
  },
  server: {				// ← ← ← ← ← ←
    host: '0.0.0.0'	// ← new content ←
  }
})

