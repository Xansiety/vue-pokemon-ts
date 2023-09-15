<script setup lang='ts'>
import NavBar from '@/shared/component/navbar/NavBar.vue';
import { pokemonRouterLinks } from '../router';
</script> 

<template>
    <NavBar :links="pokemonRouterLinks"
            is-secondary />
    <Suspense>
        <RouterView />
        <template #fallback>
            <div class='loading'>
                <h1>Loading...</h1>
            </div>
        </template>
    </Suspense>
</template> 

<style lang='scss' scoped></style>