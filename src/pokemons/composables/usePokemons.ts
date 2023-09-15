import { useQuery } from '@tanstack/vue-query'
import { computed } from 'vue'
import { getPokemons } from '../helpers/get-pokemons'

export const usePokemon = () => {
  const { isLoading, data: pokemons, isError, error } = useQuery(['pokemons'], getPokemons)

  return {
    pokemons,
    isLoading,
    isError,
    error,
    count: computed(() => pokemons.value?.length ?? 0)
  }
}
