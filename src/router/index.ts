import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/shared/pages/HomePage.vue'
import { characterRoute } from '@/characters/router'
import { clientRoute } from '@/clients/router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/about', name: 'about', component: () => import('@/shared/pages/AboutPage.vue') },

    {
      ...characterRoute,
      path: '/characters',
    },

    {
      ...clientRoute,
      path: '/clients',
    },

    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'home' },
    },
  ],
})

export default router
