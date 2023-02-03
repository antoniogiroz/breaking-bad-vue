import type { RouteRecordRaw } from 'vue-router'

export const clientRoute: RouteRecordRaw = {
  path: '/clients',
  redirect: { name: 'clients' },
  component: () => import('@/clients/layout/ClientLayout.vue'),
  children: [
    {
      path: 'list',
      name: 'clients',
      component: () => import('@/clients/pages/ClientsPage.vue'),
    },
    {
      path: ':id',
      name: 'client',
      component: () => import('@/clients/pages/ClientPage.vue'),
      props: true,
    },
  ],
}
