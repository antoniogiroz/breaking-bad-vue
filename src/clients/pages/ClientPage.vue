<script setup lang="ts">
import { watch } from 'vue'
import { useRouter } from 'vue-router'
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

  <form v-if="client" @submit.prevent="updateClient(client!)">
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
</template>
