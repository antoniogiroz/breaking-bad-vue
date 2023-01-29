<script setup lang="ts">
import CharacterCardList from '../components/CharacterCardList.vue'
import { useCharacters } from '../composables/use-characters'
import Pagination from '@/shared/components/Pagination.vue'

const { isLoading, characters, totalPages, currentPage, setCurrentPage } = useCharacters()
</script>

<template>
  <h2>Character List</h2>

  <div v-if="isLoading">
    Loading...
  </div>

  <template v-else>
    <CharacterCardList :characters="characters || []" />
    <Pagination :current="currentPage" :total="totalPages" @page-change="setCurrentPage" />
  </template>
</template>
