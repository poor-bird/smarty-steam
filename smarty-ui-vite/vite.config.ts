/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from "@vitejs/plugin-vue"
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
// import { presetUno, presetAttributify, presetIcons } from 'unocss'
import Unocss from './config/unocss'
// import { UserConfig } from "vitest";


const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue'
    },
    assetFileNames: `assets/[name].css`
  }
}


export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Unocss()
  ],
  build: {
    rollupOptions,
    minify: false,
    cssCodeSplit: true,
    lib: {
      entry: resolve(__dirname, './src/entry.ts'),
      name: 'SmartyUI',
      fileName: 'smarty-ui',
      // 导出模块
      formats: ['es', 'umd', 'iife']
    }
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    // 支持tsx组件
    transformMode: {
      web: [/.[tj]sx$/]
    }
  }
})