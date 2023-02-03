<script setup lang="ts">
import { useClients } from '../composables/use-clients'
import ClientList from '../components/ClientList.vue'
import Pagination from '@/shared/components/Pagination.vue'
import BusyIndicatorPage from '@/shared/components/BusyIndicatorPage.vue'

const { isLoading, clients, totalPages, currentPage, setCurrentPage } = useClients()
</script>

<template>
  <h2>Clients</h2>

  <BusyIndicatorPage v-if="isLoading" />

  <template v-else>
    <ClientList :clients="clients" />
    <Pagination :current="currentPage" :total="totalPages" @page-change="setCurrentPage" />
  </template>
</template>
