<template lang="pug">
NuxtLayout
  NuxtPage
</template>

<script setup>
import { onMounted } from 'vue'
import { useApiStore } from './stores/api.js'

const store = useApiStore()

onMounted(() => {
	store.fetchData()
})
</script>
