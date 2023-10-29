<template lang="pug">
input.input(:type="type ? type : 'text'" :placeholder="!isFocused ? placeholder : ''"
  @focus="isFocused = true" @blur="isFocused = false"
  :required="required" :value="modelValue"
  @input="$emit('update:modelValue', $event.target.value)")
</template>

<script setup>
import { ref } from 'vue'

defineProps(['type', 'modelValue', 'placeholder', 'required'])
defineEmits(['update:modelValue'])

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
