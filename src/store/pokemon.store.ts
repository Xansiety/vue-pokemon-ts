import { reactive } from 'vue';
import type { Pokemon } from '../pokemons/interfaces';

interface Store {
    // State
    pokemons: {
        list: Pokemon[];
        count: number;
        isLoading: boolean;
        isError: boolean;
        error: string | undefined
    }

    // Actions
    startLoadingPokemons: () => Promise<void>;
    loadedPokemons: (data: Pokemon[]) => void;
    loadPokemonsFailed: (error: string) => void;
}
 

const store = reactive<Store>({
    pokemons: {
        list: [],
        count: 0,
        isLoading: false,
        isError: false,
        error: undefined
    },
    startLoadingPokemons: async function (): Promise<void> {
        this.pokemons = {
            ...this.pokemons,
            isLoading: true,
            isError: false,
            error: undefined
        }
    },
    loadedPokemons: function (data: Pokemon[]): void {
        this.pokemons = {
            list: data,
            count: data.length,
            isLoading: false,
            isError: false,
            error: undefined
        }
    },
    loadPokemonsFailed: function (error: string): void {
        this.pokemons = {
            ...this.pokemons, // Spread operator not destroy the last state
            isLoading: false,
            isError: true,
            error: error
        }
    }
});

// store.startLoadingPokemons();

export default store;