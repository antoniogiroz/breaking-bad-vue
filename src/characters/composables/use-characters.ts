import { useQuery } from '@tanstack/vue-query'
import { ref } from 'vue'
import { characterApi } from '../api'
import type { Character } from '../domain/character'

const characters = ref<Character[]>([])

export function useCharacters() {
  const { isLoading } = useQuery<Character[]>(
    ['characters'],
    characterApi.getAll,
    {
      onSuccess(data) {
        characters.value = data
      },
    },
  )

  return {
    isLoading,
    characters,
  }
}
