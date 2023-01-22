import { apiClient } from './base.api'

export function getAll() {
  return apiClient.get<Character>('/characters')
}
