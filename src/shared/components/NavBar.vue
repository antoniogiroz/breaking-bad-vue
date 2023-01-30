<script setup lang="ts">
import type { PageLink } from '@/router/links'

const props = defineProps<{
  links: PageLink[]
}>()
</script>

<template>
  <nav class="nav-bar">
    <RouterLink v-for="link in props.links" :key="link.name" :to="link.path">
      {{ link.title }}
    </RouterLink>
  </nav>
</template>

<style lang="postcss">
.nav-bar {
  display: flex;
  gap: 1rem;
  padding: 1rem;

  & a {
    color: #000;
    text-decoration: none;
  }

  & .router-link-active {
    color: #000;
    font-weight: bold;
    text-decoration: none;
    border-bottom: 2px solid #000;
  }

}
</style>
