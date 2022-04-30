export default {
  path: '/blog',
  name: 'blog',
  component: () => import('@/pages/Blog/index.vue'),
  children: [
    {
      path: '/blog/:md',
      component: () => import('@/pages/Blog/template.vue'),
    }
  ]
}