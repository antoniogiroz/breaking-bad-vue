import type { ResponseInfo } from '@/shared/domain/response-info'

export interface CharactersResponse {
  info: ResponseInfo
  characters: Character[]
}

export interface Character {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Origin
  location: Origin
  image: string
  episode: string[]
  url: string
  created: string
}

export interface Origin {
  name: string
  url: string
}
