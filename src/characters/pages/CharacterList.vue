<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { characterApi } from '../api'
import CharacterCardList from '../components/CharacterCardList.vue'
import type { Character } from '../domain/character'

const { isLoading, data: characters } = useQuery<Character[]>(
  ['characters'],
  characterApi.getAll,
)
</script>

<template>
  <h2>Character List</h2>

  <div v-if="isLoading">
    Loading...
  </div>

  <CharacterCardList v-else :characters="characters || []" />
</template>
