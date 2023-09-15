import { useQuery } from '@tanstack/vue-query';
import { watchEffect } from 'vue';
import { getPokemon } from '../helpers/get-pokemon';

export const usePokemon = (id: number) => {
    const { isLoading, data: pokemon, isError, error } = useQuery(
        ['pokemon', id],
        () => getPokemon(id), {
        retry: 1,
        retryDelay: 1000
    })

    watchEffect(() => {
        // console.log('isError', isError.value)
    })

    return {
        pokemon,
        isLoading,
        isError,
        error,
    }
}