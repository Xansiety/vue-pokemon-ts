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
      props: { title: 'Lista de Pokemons' },
      component: () => import('@/pokemons/pages/PokemonList.vue')
    },
    {
      path: `/${ROUTE_NAME}/by/:id`,
      name: `${ROUTE_NAME}-by-id`,
      props: { title: 'Pokemon por ID' },
      component: () => import('@/pokemons/pages/PokemonById.vue')
    },
    {
      path: `/${ROUTE_NAME}/search`,
      name: `${ROUTE_NAME}-search`,
      props: { title: 'Buscar Pokemon' },
      component: () => import('@/pokemons/pages/PokemonSearch.vue')
    }
  ]
}

export const pokemonRouterLinks: RouterLink[] =
  pokemonRoutes.children?.map(({ name, path, props }) => {
    return {
      name: name?.toString() ?? '',
      path: path,
      title: (props as { title: string }).title
    }
  }) || []
