export interface PageLink {
  name: string
  path: string
  title: string
}

export const links: PageLink[] = [
  {
    name: 'home',
    path: '/',
    title: 'Home',
  },
  {
    name: 'about',
    path: '/about',
    title: 'About',
  },
  {
    name: 'characters',
    path: '/characters',
    title: 'Characters',
  },
  {
    name: 'clients',
    path: '/clients',
    title: 'Clients',
  },
]
