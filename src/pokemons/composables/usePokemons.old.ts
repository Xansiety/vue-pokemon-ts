import { ref, computed, onMounted } from 'vue'
import { getPokemons } from '../helpers/get-pokemons'
import type { Pokemon } from '../interfaces'

const isLoading = ref<boolean>(true)
const pokemons = ref<Pokemon[]>([])

export const usePokemon = () => {
  // keeping the state in the hook
  // if (pokemons.value.length > 0)
  //   return { pokemons, isLoading, count: computed(() => pokemons.value.length) }

  // load the data without life cycle
  // getPokemons().then((data) => {
  //   pokemons.value = data
  //   isLoading.value = false
  // })

  onMounted(async () => {
    const data = await getPokemons()
    pokemons.value = data
    isLoading.value = false
  })

  return {
    pokemons,
    isLoading,
    count: computed(() => pokemons.value.length)
  }
}
