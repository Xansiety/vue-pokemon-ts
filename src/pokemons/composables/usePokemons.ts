import { useQuery } from '@tanstack/vue-query'
import { computed, watchEffect } from 'vue'
import { getPokemons } from '../helpers/get-pokemons'
import { initialPokemons } from '../data/initial-pokemons';

export const usePokemon = () => {
  const { isLoading, data: pokemons, isError, error } = useQuery(['pokemons'], getPokemons, {
    retry: 1,
    retryDelay: 1000,
    initialData: initialPokemons, // can specify initial data to avoid undefined
  })

  watchEffect(() => {
    // console.log('isError', isError.value)
  })

  return {
    pokemons,
    isLoading,
    isError,
    error,
    count: computed(() => pokemons.value?.length ?? 0)
  }
}
