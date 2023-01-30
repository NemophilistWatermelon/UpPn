import { createApp } from 'vue'
/* element-ui */
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
/*vue-router*/
import Router from './router/index'
/*vuex*/
import Store from './store/index'
import '@/layout/css/theme.scss'
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css' //样式

/* 挂接 */
const app = createApp(App)
//创建v-highlight全局指令
app.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})
app.use(Router)
app.use(Store)
app.use(ElementPlus)
app.mount('#app')
