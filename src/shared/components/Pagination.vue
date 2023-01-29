<script setup lang="ts">
const props = defineProps<{
  current: number
  total: number
}>()

const emit = defineEmits<{
  (event: 'page-change', page: number): void
}>()
</script>

<template>
  <div class="pagination">
    <button :disabled="current === 1" @click="emit('page-change', props.current - 1)">
      Previous
    </button>
    <button v-for="page in props.total" :key="page" :class="{ active: current === page }" @click="emit('page-change', page)">
      {{ page }}
    </button>
    <button :disabled="current === total" @click="emit('page-change', props.current + 1)">
      Next
    </button>
  </div>
</template>

<style scoped>
div {
    margin-top: 10px;
}
button {
    background-color: transparent;
    border-radius: 5px;
    border: 1px solid var( --color-border );
    color: var( --color-text );
    cursor: pointer;
    margin-right: 5px;
    padding: 10px;
    transition: all .5s;
}
button:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
    transition: all .5s;
}
button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
}
.active {
    background-color: hsla(160, 100%, 37%, 0.2);
}
</style>
