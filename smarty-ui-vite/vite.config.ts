import { defineConfig } from 'vite'
import vue from "@vitejs/plugin-vue"
import vueJsx from '@vitejs/plugin-vue-jsx'
import {resolve} from 'path'


const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({})
  ],
  build: {
    rollupOptions,
    minify: false,
    lib: {
      entry: resolve(__dirname, './src/entry.ts'),
      name: 'SmartyUI',
      fileName: 'smarty-ui',
      // 导出模块
      formats: ['es', 'umd', 'iife']
    }
  }
})