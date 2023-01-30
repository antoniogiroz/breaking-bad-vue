<script setup lang="ts">
import CharacterCardList from '../components/CharacterCardList.vue'
import { useCharacters } from '../composables/use-characters'
import Pagination from '@/shared/components/Pagination.vue'
import BusyIndicatorPage from '@/shared/components/BusyIndicatorPage.vue'

const { isLoading, characters, totalPages, currentPage, setCurrentPage } = useCharacters()
</script>

<template>
  <h2>Character List</h2>

  <BusyIndicatorPage v-if="isLoading" />

  <template v-else>
    <CharacterCardList :characters="characters || []" />
    <Pagination :current="currentPage" :total="totalPages" @page-change="setCurrentPage" />
  </template>
</template>
