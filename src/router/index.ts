import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/' },
    { path: '/2021-F2E-Week2/', name: 'home', component: () => import('@/pages/Home.vue') },
    { path: '/2021-F2E-Week2/error/', name: 'error', component: () => import('@/pages/Error.vue') },

  ],
})

export default router
