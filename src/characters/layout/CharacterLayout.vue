<script setup lang="ts">
import { RouterView } from 'vue-router'
import type { PageLink } from '@/router/links'
import TheNavBar from '@/shared/components/TheNavBar.vue'

const links: PageLink[] = [
  { name: 'character-list', path: '/characters/list', title: 'Characters' },
  { name: 'character-search', path: '/characters/search', title: 'Search' },
]
</script>

<template>
  <h1>Characters</h1>

  <TheNavBar :links="links" />

  <RouterView />
</template>
