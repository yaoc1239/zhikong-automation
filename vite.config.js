import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // GitHub Pages 项目站点部署在 /zhikong-automation/ 子路径下
  base: '/zhikong-automation/',
  server: {
    host: true,
    port: 5173
  }
})
