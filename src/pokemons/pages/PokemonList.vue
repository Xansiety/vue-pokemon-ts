<script setup lang='ts'>
import { usePokemon } from '../composables/usePokemons';

const { count, isLoading, pokemons } = usePokemon();

</script> 

<template>
    <div class='pokemon-list'>
        <span v-if="isLoading">
            <h1>
                Cargando...
            </h1>
        </span>

        <template v-if="!isLoading">
            <h1>
                Pokemon List - {{ count }}
            </h1>
            <ul v-if="!isLoading">
                <li v-for='pokemon in pokemons'
                    :key='pokemon.name'>
                    {{ pokemon.name }}
                </li>
            </ul>
        </template>
    </div>
</template> 

<style lang='scss' scoped></style>