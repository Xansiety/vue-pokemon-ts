<script setup lang='ts'>
import { ref } from 'vue';
import { getPokemons } from '../helpers/get-pokemons';
import type { Pokemon } from '../interfaces';

export interface Props {
    title?: string;
}
defineProps<Props>();

const data = await getPokemons();
const pokemons = ref<Pokemon[]>(data);

// getPokemons().then((response) => {
//     pokemons.value = { ...response };
// });

</script> 

<template>
    <h1> Pokemon List</h1>


    <ul>
        <li v-for='pokemon in pokemons'
            :key='pokemon.name'>
            {{ pokemon.name }}
        </li>
    </ul>
</template> 

<style lang='scss' scoped></style>