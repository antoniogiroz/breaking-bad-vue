import { useQuery } from '@tanstack/vue-query'
import type { MaybeRef } from '@tanstack/vue-query/build/lib/types'
import { unref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { characterApi } from '../api'
import type { Character } from '../domain/character'

export function useCharacter(id: MaybeRef<string>) {
  const router = useRouter()

  const { isLoading, isError, data: character } = useQuery<Character>(
    ['character', id],
    () => characterApi.getById(unref(id)),
  )

  watchEffect(() => {
    if (!isLoading.value && isError.value)
      router.replace({ name: 'characters' })
  })

  return {
    isLoading,
    character,
  }
}
