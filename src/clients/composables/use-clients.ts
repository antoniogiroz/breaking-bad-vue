import { useQuery } from '@tanstack/vue-query'
import { computed, ref, watchEffect } from 'vue'
import { clientApi } from '../api'
import type { Client } from '../domain/client'

const clients = ref<Client[]>()
const totalPages = ref(5)
const currentPage = ref(1)

export function useClients() {
  const { isLoading, data } = useQuery<Client[]>(
    ['client?_page=', currentPage],
    () => clientApi.getAll(currentPage.value),
  )

  function setCurrentPage(page: number) {
    currentPage.value = page
  }

  watchEffect(() => {
    clients.value = data.value || []
  })

  return {
    isLoading,
    clients: computed(() => clients.value),
    totalPages,
    currentPage: computed(() => currentPage.value),
    setCurrentPage,
  }
}
