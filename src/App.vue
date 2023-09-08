<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './shared/component/navbar/NavBar.vue';
import { routerLinks } from './router/list-routes';

</script>

<template>
  <header>
    <NavBar :links="routerLinks" />
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
