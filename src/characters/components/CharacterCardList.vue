<script setup lang="ts">
import type { Character } from '../domain/character'
import CharacterCardListItem from './CharacterCardListItem.vue'

const props = defineProps<{
  characters: Character[]
}>()
</script>

<template>
  <div class="card-list">
    <CharacterCardListItem v-for="character of props.characters" :key="character.id" :character="character" />
  </div>
</template>

<style scoped>
.card-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
