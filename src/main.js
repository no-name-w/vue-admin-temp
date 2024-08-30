import { createApp } from 'vue'
import App from './App.vue'
import * as Icons from '@element-plus/icons';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import './css/base.less'
import './css/overide.less'
import router from './router/index.js'
import store from "@/store/index.js"

const app = createApp(App)

// 全局引入所有icon
Object.keys(Icons).forEach((key) => {
  app.component(key, Icons[key]);
});


app.use(ElementPlus,{
  locale:zhCn
}).use(store).use(router).mount('#app')