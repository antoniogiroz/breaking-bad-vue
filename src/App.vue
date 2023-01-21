<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheNavBar from './shared/components/TheNavBar.vue'
import { links } from '@/router/links'
</script>

<template>
  <header>
    <TheNavBar title="Breaking Bad" :links="links" />
  </header>

  <main>
    <RouterView />
  </main>
</template>
