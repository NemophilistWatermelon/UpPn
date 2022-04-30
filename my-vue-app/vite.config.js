import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Markdown from 'vite-plugin-md'
const mdPlugin = require('vite-plugin-markdown')
console.log(mdPlugin)
import path from 'path'
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({ /* options */
      imports: ["vue", "vue-router"]
    }),
    // Markdown(),
    mdPlugin.plugin({
      mode: ['html']
    })
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
