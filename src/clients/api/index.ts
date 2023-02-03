import axios from 'axios'
import type { Client } from '../domain/client'

async function waitFor(ms = 1000) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_CLIENT_API_URL,
})

async function getAll(page = 1): Promise<Client[]> {
  await waitFor(1000)
  const { data } = await apiClient.get<Client[]>('/clients', {
    params: {
      _page: page,
    },
  })

  return data
}

async function getById(id: number): Promise<Client> {
  await waitFor(1000)
  const { data } = await apiClient.get<Client>(`/clients/${id}`)
  return data
}

async function update(client: Client): Promise<Client> {
  await waitFor(1000)
  const { data } = await apiClient.patch<Client>(`/clients/${client.id}`, client)
  return data
}

export const clientApi = {
  getAll,
  getById,
  update,
}
