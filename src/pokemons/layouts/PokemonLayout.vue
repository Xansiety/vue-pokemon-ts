<script setup lang='ts'>
import NavBarVue from '@/shared/component/navbar/NavBar.vue';
import { pokemonRouterLinks } from '../router';
</script> 

<template>
    <NavBarVue :links="pokemonRouterLinks"
               is-secondary />
    <RouterView />
</template> 

<style lang='scss' scoped></style>