<script setup lang="ts">
import { useClient } from '../composables/use-client'

const props = defineProps<{
  id: string
}>()

const { isLoading, client, updateClient, updatingClient } = useClient(+props.id)
</script>

<template>
  <div v-if="isLoading">
    Loading...
  </div>

  <form v-else-if="client" @submit.prevent="updateClient(client!)">
    <label>
      Name
      <input v-model="client.name" type="text">
    </label>

    <label>
      Email
      <input v-model="client.email" type="email">
    </label>

    <label>
      Phone
      <input v-model="client.phone" type="tel">
    </label>

    <button :disabled="updatingClient">
      Save
    </button>
  </form>

  <div v-else>
    Client not found
  </div>
</template>
