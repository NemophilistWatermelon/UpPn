import { createApp } from 'vue'
/* element-ui */
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
/*vue-router*/
import Router from './router/index'
/*vuex*/
import Store from './store/index'

/* 挂接 */
const app = createApp(App)

app.use(Router)
app.use(Store)
app.use(ElementPlus)
app.mount('#app')
