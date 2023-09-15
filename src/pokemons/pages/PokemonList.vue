<script setup lang='ts'>
import { usePokemon } from '../composables/usePokemons';
import PokemonCardList from '../components/PokemonCardList.vue';

const { isLoading, pokemons, count, isError, error } = usePokemon();
</script> 

<template>
    <div class='pokemon-list'>
        <h1 v-if="isLoading">Cargando...</h1>
        <div v-else-if="isError">
            <h1>Error</h1>
            <p>{{ error }}</p>
        </div>
        <div v-else>
            <h1>
                Pokemon List - {{ count }}
            </h1>
            <PokemonCardList :pokemons="pokemons ?? []" />
        </div>
    </div>
</template> 

<style lang='scss' scoped></style>