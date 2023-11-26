import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // 需要引入 path

// const noAttr = () => {
//   return {
//     name: "no-attribute",
//     transformIndexHtml(html) {
//       return html.replace(`type="module" crossorigin`, "");
//     }
// }}

// https://vitejs.dev/config/
export default defineConfig({
  base: "/vitest/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    vue()
  ]
})
