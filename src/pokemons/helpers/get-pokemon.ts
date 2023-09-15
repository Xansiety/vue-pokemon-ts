import pokemonApi from '../api/pokemon-api';
import type { Pokemon } from '../interfaces/pokemon';
import type { PokemonResponse } from '../interfaces/pokemon-response';

export const getPokemon = async (id: number): Promise<Pokemon> => {

    const { data } = await pokemonApi.get<PokemonResponse>(`/pokemon/${id}`)

    const pokemon: Pokemon = {
        id: data.id,
        name: data.name,
        frontSprite: data.sprites.front_default
    }

    return pokemon
}
