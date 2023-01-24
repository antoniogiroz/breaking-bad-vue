import { useQuery } from '@tanstack/vue-query'
import { watchEffect } from 'vue'
import { storeToRefs } from 'pinia'
import { characterApi } from '../api'
import type { Character } from '../domain/character'
import { useCharacterStore } from '@/store/character.store'

export function useCharacters() {
  const characterStore = useCharacterStore()

  const { characters, totalPages, currentPage } = storeToRefs(characterStore)

  const { isLoading, data } = useQuery<Character[]>(
    ['characters'],
    characterApi.getAll,
  )

  watchEffect(() => {
    characterStore.characters = data.value || []
  })

  return {
    isLoading,
    characters,
    totalPages,
    currentPage,
  }
}
