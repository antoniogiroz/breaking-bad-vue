<script setup lang="ts">
import type { PageLink } from '@/router/links'

const props = defineProps<{
  title: string
  links: PageLink[]
}>()
</script>

<template>
  <nav>
    <h1>{{ props.title }}</h1>

    <RouterLink v-for="link in props.links" :key="link.name" :to="link.path">
      {{ link.title }}
    </RouterLink>
  </nav>
</template>
