import { useQuery } from '@tanstack/vue-query'
import { computed, watchEffect } from 'vue'
import { storeToRefs } from 'pinia'
import { characterApi } from '../api'
import type { CharactersResponse } from '../domain/character'
import { useCharacterStore } from '@/store/character.store'

export function useCharacters() {
  const characterStore = useCharacterStore()

  const { characters, totalPages, currentPage } = storeToRefs(characterStore)

  const { isLoading, data } = useQuery<CharactersResponse>(
    ['characters?page=', currentPage],
    () => characterApi.getAll(currentPage.value),
  )

  function setCurrentPage(page: number) {
    characterStore.currentPage = page
  }

  watchEffect(() => {
    characterStore.characters = data.value?.characters || []
    totalPages.value = data.value?.info.pages || 0
  })

  return {
    isLoading,
    characters,
    totalPages,
    currentPage: computed(() => currentPage.value),
    setCurrentPage,
  }
}
