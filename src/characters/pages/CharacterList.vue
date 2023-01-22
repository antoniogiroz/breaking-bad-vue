<script setup lang="ts">
import CharacterCardList from '../components/CharacterCardList.vue'
import { useCharacters } from '../composables/use-characters'

const { isLoading, characters } = useCharacters()
</script>

<template>
  <h2>Character List</h2>

  <div v-if="isLoading">
    Loading...
  </div>

  <CharacterCardList v-else :characters="characters || []" />
</template>
