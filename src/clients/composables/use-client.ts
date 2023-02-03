import { useQuery } from '@tanstack/vue-query'
import type { MaybeRef } from '@tanstack/vue-query/build/lib/types'
import { ref, unref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { clientApi } from '../api'
import type { Client } from '../domain/client'

export function useClient(id: MaybeRef<number>) {
  const router = useRouter()
  const client = ref<Client>()

  const { isLoading, isError, data } = useQuery<Client>(
    ['clients', id],
    () => clientApi.getById(unref(id)),
  )

  watchEffect(() => {
    if (!isLoading.value && isError.value) {
      router.replace({ name: 'clients' })
      return
    }
    client.value = { ...data.value } as Client
  })

  return {
    isLoading,
    client,
  }
}
