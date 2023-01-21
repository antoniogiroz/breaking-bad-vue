<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheNavBar from './shared/components/TheNavBar.vue'
import { links } from '@/router/links'
</script>

<template>
  <header>
    <h1>Breaking Bad</h1>
    <TheNavBar :links="links" />
  </header>

  <main>
    <RouterView />
  </main>
</template>
