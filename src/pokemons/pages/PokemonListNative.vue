<script setup lang='ts'>
import store from '@/store/pokemon.store';
import { useQuery } from '@tanstack/vue-query';
import PokemonCardList from '../components/PokemonCardList.vue';
import { getPokemons } from '../helpers/get-pokemons';
 

useQuery(
    ['pokemons'],
    getPokemons,
   {
    select(data) {
        store.loadedPokemons(data);
    }
   } 
)

</script> 

<template>
    <div class='pokemon-list-native'>
        <h1 v-if="store.pokemons.isLoading">Cargando...</h1>
        <div v-else-if="store.pokemons.isError">
            <h1>Error</h1>
            <p>{{ store.pokemons.error }}</p>
        </div>
        <div v-else>
            <h1>
                Pokemon List Native State Manager - {{ store.pokemons.count }}
            </h1>
            <PokemonCardList :pokemons="store.pokemons.list ?? []" />
        </div>
    </div>
</template> 

<style lang='scss' scoped></style>