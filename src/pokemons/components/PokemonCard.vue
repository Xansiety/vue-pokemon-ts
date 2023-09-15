<script setup lang='ts'>
import { useRouter } from 'vue-router';
import type { Pokemon } from '../interfaces';


interface Props {
    pokemon: Pokemon
}

const router = useRouter();

const props = defineProps<Props>()


const goTo = () => {
    router.push({
        name: 'pokemons-by-id',
        params: {
            id: props.pokemon.id
        }
    })
}

</script> 

<template>
    <div class="pokemon-card"
         @click="goTo">
        <img :src="pokemon.frontSprite"
             :alt="pokemon.name"
             class="img-responsive">
        <h3>
            {{ pokemon.name }}
        </h3>
    </div>
</template> 

<style scoped>
.pokemon-card {
    margin-right: 5px;
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    cursor: pointer;
}

img {
    width: 150px;
    border-radius: 5px 5px 0 0;
    box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease-in-out;
}


img:hover {
    transform: scale(1.1);
    overflow: hidden;
    box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.3);
    transition: all 0.3s ease-in-out;
}
</style>