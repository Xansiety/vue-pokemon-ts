import type { RouterLink } from '@/router/list-routes'
import type { RouteRecordRaw } from 'vue-router'

const ROUTE_NAME = 'pokemons'

export const pokemonRoutes: RouteRecordRaw = {
  path: `/${ROUTE_NAME}`,
  redirect: `/${ROUTE_NAME}/list`,
  component: () => import('@/pokemons/layouts/PokemonLayout.vue'),
  children: [
    {
      path: `/${ROUTE_NAME}/list`,
      name: `${ROUTE_NAME}-list`,
      props: { title: 'Lista de Pokemons', isVisible: true },
      component: () => import('@/pokemons/pages/PokemonList.vue')
    },
    {
      path: `/${ROUTE_NAME}/list-native`,
      name: `${ROUTE_NAME}-list-native`,
      props: { title: 'Lista de Pokemons (Native)', isVisible: true },
      component: () => import('@/pokemons/pages/PokemonListNative.vue')
    },
    {
      path: `/${ROUTE_NAME}/by/:id`,
      name: `${ROUTE_NAME}-by-id`,
      props: { title: 'Pokemon por ID', isVisible: false },
      component: () => import('@/pokemons/pages/PokemonById.vue')
    },
    {
      path: `/${ROUTE_NAME}/search`,
      name: `${ROUTE_NAME}-search`,
      props: { title: 'Buscar Pokemon', isVisible: true },
      component: () => import('@/pokemons/pages/PokemonSearch.vue')
    }
  ]
}

export const pokemonRouterLinks: RouterLink[] =
  pokemonRoutes.children?.map(({ name, path, props }) => {
    
    const { title, isVisible } = props as { title: string, isVisible: boolean };
    return {
      name: name?.toString() ?? '',
      path: path,
      title: title,
      isVisible: isVisible
    }
  }) || []
