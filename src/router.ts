import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: () => import('@/pages/Home.vue') },
    { path: '/error', name: 'error', component: () => import('@/pages/Error.vue') },

  ],
})

export default router
