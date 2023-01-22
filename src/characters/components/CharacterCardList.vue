<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { characterApi } from '../api'
import type { Character } from '../domain/character'
import CharacterCardListItem from './CharacterCardListItem.vue'

const { isLoading, data: characters } = useQuery<Character[]>(
  ['characters'],
  characterApi.getAll,
  {
    cacheTime: 1000 * 1,
    refetchOnReconnect: 'always',
  },
)
</script>

<template>
  <div v-if="isLoading">
    Loading...
  </div>

  <div class="card-list">
    <CharacterCardListItem v-for="character of characters" :key="character.id" :character="character" />
  </div>
</template>

<style scoped>
.card-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
