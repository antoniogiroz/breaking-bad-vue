import axios from 'axios'
import type { Client } from '../domain/client'

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_CLIENT_API_URL,
})

async function getAll(page = 1): Promise<Client[]> {
  const { data } = await apiClient.get<Client[]>('/clients', {
    params: {
      _page: page,
    },
  })

  return data
}

async function getById(id: number): Promise<Client> {
  const { data } = await apiClient.get<Client>(`/clients/${id}`)
  return data
}

export const clientApi = {
  getAll,
  getById,
}
