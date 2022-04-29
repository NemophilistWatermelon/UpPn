import { createRouter, createWebHashHistory } from 'vue-router'
import udpn from './udpn'

const Layout = () => import('@/layout/index.vue')

var routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/index',
        name: '首页',
        meta: {
          title: '首页'
        },
      },
      udpn
    ]
  },
  
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router
