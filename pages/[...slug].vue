<template lang="pug">
component(:is="componentName(comp.type)" v-for="comp in store.data.body")
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

const componentName = type => {
	return type.split('_').join('-')
}
</script>
