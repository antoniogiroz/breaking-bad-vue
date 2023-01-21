<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheNavBar from './shared/components/TheNavBar.vue'
</script>

<template>
  <header>
    <TheNavBar />
  </header>

  <main>
    <RouterView />
  </main>
</template>
