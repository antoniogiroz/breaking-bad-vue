<script setup lang="ts">
import type { PropType } from 'vue'
import type { Client } from '../domain/client'

const props = defineProps({
  clients: {
    type: Array as PropType<Client[]>,
  },
})
</script>

<template>
  <ul>
    <li
      v-for="client of props.clients"
      :key="client.id"
    >
      <RouterLink
        :to="{
          name: 'client',
          params: { id: client.id },
        }"
      >
        {{ client.name }}
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped>
input {
    width: 100%;
    padding: 5px 10px;
    margin-bottom: 10px;
}
button {
    margin-bottom: 10px;
}
</style>
