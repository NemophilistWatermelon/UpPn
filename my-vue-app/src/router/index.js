import { createRouter, createWebHashHistory } from 'vue-router'
// 双拼路由
import udpn from './udpn'
// Blog 路由
import Blog from './Blog'
// Project 路由
import Project from './Project' 

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
      udpn,
      Blog,
      Project,
    ]
  },
  
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router
