<script setup lang="ts">
import { ref } from 'vue'
import CharacterCardList from '../components/CharacterCardList.vue'

const myRef = ref(0)
</script>

<template>
  <h2>Character List</h2>

  <CharacterCardList />
</template>
