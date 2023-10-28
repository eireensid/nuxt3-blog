<template lang="pug">
input.input(:placeholder="!isFocused ? placeholder : ''" @focus="isFocused = true" @blur="isFocused = false")
</template>

<script setup>
import { ref } from 'vue'

defineProps(['placeholder'])

const isFocused = ref(false)
</script>

<style lang="scss">
.input {
	border: none;
	background: transparent;
	border-bottom: 1px solid $gray;
	padding: 0 10px;
	height: 26px;
	color: $gray;
	max-width: 353px;
	width: 100%;

	&:focus {
		border-color: $blue;
	}
}
</style>
