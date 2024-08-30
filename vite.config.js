import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"

const resolve = dir => {
  return path.join(__dirname, dir)
}

// 项目部署基础
// 默认情况下，我们假设你的应用将被部署在域的根目录下,
// 例如：https://www.my-app.com/
// 默认：'/'
// 如果您的应用程序部署在子路径中，则需要在这指定子路径
// 例如：https://www.foobar.com/my-app/
// 需要将它改为'/my-app/'
const BASE_URL = process.env.NODE_ENV === 'production'
  ? '/'
  : '/'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173, // 设置开发服务器端口
  },
  base:BASE_URL,
  resolve: {
    alias: {
      // 设置别名
      '@': resolve('src'),
      // 可以设置多个别名
      // 例如，为 'components' 目录设置别名
      '_c':resolve('src/components'),
    },
  },
  build: {
    sourcemap: false, // 设置为 false 来禁用打包时 source map 生成
  },
})
