import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'
import type { Character } from '@/characters/domain/character'

export const useCharacterStore = defineStore('character', () => {
  const characters = ref<Character[]>([])
  const totalPages = ref(0)
  const currentPage = ref(1)

  return {
    characters,
    totalPages,
    currentPage,
  }
},
)

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCharacterStore, import.meta.hot))
