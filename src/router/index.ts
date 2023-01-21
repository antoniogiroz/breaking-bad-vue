import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/shared/pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/about', name: 'about', component: () => import('@/shared/pages/AboutPage.vue') },

    {
      path: '/characters',
      name: 'characters',
      component: () => import('@/characters/layout/CharacterLayout.vue'),
    },

    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'home' },
    },
  ],
})

export default router
