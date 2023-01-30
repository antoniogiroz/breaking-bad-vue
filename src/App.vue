<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheNavBar from './shared/components/NavBar.vue'
import { links } from '@/router/links'
</script>

<template>
  <header>
    <h1>Rick & Morty</h1>
    <TheNavBar :links="links" />
  </header>

  <main>
    <RouterView />
  </main>
</template>
