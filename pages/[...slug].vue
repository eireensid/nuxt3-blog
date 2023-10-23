<template lang="pug">
component(:is="componentName(comp.type)" v-for="comp in store.data.body")
</template>

<script setup>
import { onMounted, resolveComponent, shallowRef } from 'vue'
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
	const words = type.split('_')
	const newStr = words
		.map(word => {
			return word[0].toUpperCase() + word.substring(1)
		})
		.join('')
	return resolveComponent(newStr)
}
</script>
