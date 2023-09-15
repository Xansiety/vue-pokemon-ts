<script setup lang='ts'>
import { useRoute } from 'vue-router';
import { usePokemon } from '../composables/usePokemon';
import { useQueryClient } from '@tanstack/vue-query';

const route = useRoute();
const queryClient = useQueryClient();

const { id } = route.params;

const { isLoading, error, isError, pokemon } = usePokemon(+id);

const invalidatePokemonQueries = () => {
    // queryClient.invalidateQueries(); // Invalida todas las queries
    queryClient.invalidateQueries(['pokemon', +id]); // Invalida una query en especifico
}

</script> 

<template>
    <button @click="invalidatePokemonQueries"
            class="btn btn-primary">
        Invalidar Queries de TanStack
    </button>

    <h1 v-if="isLoading"> Loading... </h1>
    <h1 v-else-if="isError"> {{ error }} </h1>
    <div v-else-if="pokemon">
        <h1> {{ pokemon.name }} </h1>
        <div class="character-container">
            <img :src="pokemon.frontSprite"
                 :alt="pokemon.name"
                 class="img-responsive">
        </div>

    </div>
</template> 

<style scoped>
.character-container {
    display: flex;
    flex-direction: row;
    align-items: center;
}

img {
    width: 150px;
    border-radius: 5px 5px 0 0;
}
</style>