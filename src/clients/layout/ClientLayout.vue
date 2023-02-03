<script setup lang="ts">
import { RouterView } from 'vue-router'
import type { PageLink } from '@/router/links'
import NavBar from '@/shared/components/NavBar.vue'

const links: PageLink[] = [
  { name: 'clients', path: '/clients/list', title: 'clients' },
]
</script>

<template>
  <h1>Clients</h1>

  <NavBar :links="links" />

  <RouterView />
</template>
