import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query'
import type { MaybeRef } from '@tanstack/vue-query/build/lib/types'
import { ref, unref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify'
import { clientApi } from '../api'
import type { Client } from '../domain/client'

export function useClient(id: MaybeRef<number>) {
  const router = useRouter()
  const client = ref<Client>()
  const queryClient = useQueryClient()

  const { isLoading, isError, data } = useQuery<Client>(
    ['clients', id],
    () => clientApi.getById(unref(id)),
    {
      retry: false,
      onError: () => {
        toast.error(`Error loading client with id: ${id}`)
      },
    },
  )

  const mutation = useMutation({
    mutationFn: clientApi.update,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['clients', id] })
      toast.success('Client updated successfully')
    },
    onError: () => {
      toast.error('Error updating client')
    },
  })

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
    updateClient: mutation.mutate,
    updatingClient: mutation.isLoading,
  }
}
