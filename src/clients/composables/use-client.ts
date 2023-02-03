import { useMutation, useQuery } from '@tanstack/vue-query'
import type { MaybeRef } from '@tanstack/vue-query/build/lib/types'
import { ref, unref, watch, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify'
import { clientApi } from '../api'
import type { Client } from '../domain/client'

export function useClient(id: MaybeRef<number>) {
  const router = useRouter()
  const client = ref<Client>()

  const { isLoading, isError, data } = useQuery<Client>(
    ['clients', id],
    () => clientApi.getById(unref(id)),
  )

  const mutation = useMutation(clientApi.update)

  watchEffect(() => {
    if (!isLoading.value && isError.value) {
      router.replace({ name: 'clients' })
      return
    }
    client.value = { ...data.value } as Client
  })

  watch(mutation.isSuccess, (success) => {
    if (success)
      toast.success('Client updated successfully')
  })

  return {
    isLoading,
    client,
    updateClient: mutation.mutate,
    updatingClient: mutation.isLoading,
  }
}
