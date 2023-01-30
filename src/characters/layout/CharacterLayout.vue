<script setup lang="ts">
import { RouterView } from 'vue-router'
import type { PageLink } from '@/router/links'
import NavBar from '@/shared/components/NavBar.vue'

const links: PageLink[] = [
  { name: 'characters', path: '/characters/list', title: 'Characters' },
  { name: 'characters-search', path: '/characters/search', title: 'Search' },
]
</script>

<template>
  <h1>Characters</h1>

  <NavBar :links="links" />

  <RouterView />
</template>
