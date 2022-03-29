import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path'
export default defineConfig({
  plugins: [
    vue(),

  ],
  resolve: {
    alias: {
      // 键必须以斜线开始和结束
      "@": path.resolve(__dirname, "src"),
      "p": path.resolve(__dirname, "src/pages"),
      "api": path.resolve(__dirname, "src/api"),
    }
  },
  build:{
    outDir: 'dist',//Specify the output directory (relative to project root).
  }
})
