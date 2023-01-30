import type { RouteRecordRaw } from 'vue-router'

export const characterRoute: RouteRecordRaw = {
  path: '/characters',
  redirect: { name: 'characters' },
  component: () => import('@/characters/layout/CharacterLayout.vue'),
  children: [
    {
      path: 'list',
      name: 'characters',
      component: () => import('@/characters/pages/CharactersPage.vue'),
    },
    {
      path: 'search',
      name: 'characters-search',
      component: () => import('@/characters/pages/CharactersSearchPage.vue'),
    },
    {
      path: ':id',
      name: 'character',
      component: () => import('@/characters/pages/CharacterPage.vue'),
      props: true,
    },
  ],
}
