<template lang="pug">
div {{store.data}}
</template>

<script setup>
import { onMounted } from 'vue'
import { useApiStore } from '@/stores/api.js'
import { useHead } from 'unhead'

const store = useApiStore()

onMounted(async () => {
	await store.fetchData()

	useHead({
		title: store.data.meta.title,
		meta: [{ name: 'description', content: store.data.meta.description }]
	})
})
</script>
