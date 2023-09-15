export interface RouterLink {
  name: string
  path: string
  title: string
  isVisible: boolean
}

export const routerLinks: RouterLink[] = [
  { path: '/', name: 'home', title: 'Home', isVisible: true },
  { path: '/about', name: 'about', title: 'About', isVisible: true },
  { path: '/counter', name: 'counter', title: 'Counter', isVisible: true },
  { path: '/pokemons', name: 'pokemon', title: 'Pokemons', isVisible: true }
]
