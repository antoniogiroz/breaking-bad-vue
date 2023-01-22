import type { Character } from '../domain/character'
import type { ApiAllCharactersResponse, CharacterData } from '@/infrastructure/api-response'
import { apiClient } from '@/api/base.api'

async function getAll(): Promise<Character[]> {
  const { data } = await apiClient.get<ApiAllCharactersResponse>('/character')

  return data.results.map(mapCharacterApiDataToCharacter)
}

async function getById(id: string): Promise<Character> {
  const { data } = await apiClient.get<CharacterData>(`/character/${id}`)
  return mapCharacterApiDataToCharacter(data)
}

function mapCharacterApiDataToCharacter(character: CharacterData): Character {
  return {
    id: character.id,
    name: character.name,
    image: character.image,
    status: character.status,
    species: character.species,
    type: character.type,
    gender: character.gender,
    origin: character.origin,
    location: character.location,
    episode: character.episode,
    url: character.url,
    created: character.created,
  }
}

export const characterApi = {
  getAll,
  getById,
}
