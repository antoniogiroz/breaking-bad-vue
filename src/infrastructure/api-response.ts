export interface ApiAllCharactersResponse {
  info: ResponseInfo
  results: CharacterData[]
}

export interface CharacterData {
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

interface Origin {
  name: string
  url: string
}

interface ResponseInfo {
  count: number
  pages: number
  next: string
  prev?: any
}
