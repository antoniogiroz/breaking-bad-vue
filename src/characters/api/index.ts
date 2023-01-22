import type { Character } from '../domain/character'
import type { ApiAllCharactersResponse } from '@/infrastructure/api-response'
import { apiClient } from '@/api/base.api'

async function getAll(): Promise<Character[]> {
  const { data } = await apiClient.get<ApiAllCharactersResponse>('/character')

  return data.results.map((character) => {
    return {
      id: character.id,
      name: character.name,
      image: character.image,
    }
  })
}

export const characterApi = {
  getAll,
}
