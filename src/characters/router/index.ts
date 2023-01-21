import type { RouteRecordRaw } from 'vue-router'

export const characterRoute: RouteRecordRaw = {
  path: '/characters',
  name: 'characters',
  redirect: { name: 'characters-list' },
  component: () => import('@/characters/layout/CharacterLayout.vue'),
  children: [
    {
      path: 'list',
      name: 'characters-list',
      component: () => import('@/characters/pages/CharacterList.vue'),
      props: { title: 'Characters' },
    },
    {
      path: 'search',
      name: 'characters-search',
      component: () => import('@/characters/pages/CharacterSearch.vue'),
      props: { title: 'Characters Search' },
    },
    {
      path: ':id',
      name: 'characters-detail',
      component: () => import('@/characters/pages/CharacterDetail.vue'),
      props: { title: 'Character Detail' },
    },
  ],
}
