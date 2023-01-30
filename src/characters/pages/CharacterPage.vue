<script setup lang="ts">
import { useCharacter } from '../composables/use-character'

const props = defineProps<{
  id: string
}>()

const { isLoading, character } = useCharacter(props.id)
</script>

<template>
  <div v-if="isLoading">
    Loading...
  </div>

  <div v-else-if="character">
    <h1>{{ character.name }}</h1>
    <div class="character-container">
      <img :src="character.image" :alt="character.name">
      <ul>
        <li>Species: {{ character.species }}</li>
        <li>Type: {{ character.type }}</li>
        <li>Gender: {{ character.gender }}</li>
        <li>Origin: {{ character.origin.name }}</li>
        <li>Location: {{ character.location.name }}</li>
        <li>Status: {{ character.status }}</li>
      </ul>
    </div>

    <div>
      <h2>Episodes</h2>
      <ul>
        <li v-for="episode of character.episode" :key="episode">
          <a :href="episode">{{ episode.split('/').pop() }}</a>
        </li>
      </ul>
    </div>
  </div>

  <div v-else>
    Character not found
  </div>
</template>

<style scoped>
.character-container {
    display: flex;
    flex-direction: row;
}

img {
    width: 150px;
    border-radius: 5px;
}
</style>
