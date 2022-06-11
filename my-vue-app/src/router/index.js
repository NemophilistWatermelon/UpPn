import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import { createRouter, createWebHashHistory } from 'vue-router'
// 双拼路由
import udpn from './udpn'
// Blog 路由
import Blog from './Blog'
// Project 路由
import Project from './Project' 
// Gernerator 路由
import Gernerator from './Gernerator' 


const Layout = () => import('@/layout/index.vue')

var routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        meta: {
          title: '首页'
        },
        component: () => import('@/pages/Intro/index.vue')
      },
      udpn,
      Blog,
      Project,
      Gernerator,
      {
        path: '/posts/:md*',
        component: () => import('@/pages/Blog/template.vue'),
      }
    ]
  },
  
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})


NProgress.configure({ showSpinner: false })

//在路由跳转前用NProgress.start()标记下进度条开始
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
});

//在路由跳转后用NProgress.done()标记下结束
router.afterEach(() => {
  NProgress.done()
})


export default router
