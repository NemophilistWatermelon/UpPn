import { createRouter, createWebHashHistory } from 'vue-router'
import udpn from './udpn'
var routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: '首页',
    meta: {
      title: '首页'
    },
    component: () => import('p/Index/index.vue'),
    children: [
      {
        path: 'left',
        component: () => import('p/Index/Left.vue')
      }
    ]
  },
  udpn
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router
