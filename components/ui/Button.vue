<template lang="pug">
button.button {{title}}
</template>

<script setup>
defineProps(['title'])
</script>

<style lang="scss" scoped>
.button {
	padding: 10px 50px;
	border-radius: $radius;
	@include transition;
	@include font(18, 26, 400, $white);
	background: $blue;
	border: 1px solid $blue;

	&:hover {
		background: transparent;
	}
}
</style>
