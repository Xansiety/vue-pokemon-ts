import pokemonApi from '../api/pokemon-api'
import type { Pokemon, PokemonListResponse, PokemonResponse } from '../interfaces'
import axios from 'axios'

export const getPokemons = async (): Promise<Pokemon[]> => {
  const { data } = await pokemonApi.get<PokemonListResponse>('/pokemon?limit=45')

  const pokemonPromises: Promise<Pokemon>[] = []

  data.results.map(({ url }) => {
    const pokemonPromise = axios.get<PokemonResponse>(url).then(({ data }) => {
      return {
        id: data.id,
        name: data.name,
        frontSprite: data.sprites.front_default
      }
    })

    pokemonPromises.push(pokemonPromise)

    return pokemonPromise
  })

  const pokemons: Pokemon[] = await Promise.all(pokemonPromises)

  return pokemons
}
