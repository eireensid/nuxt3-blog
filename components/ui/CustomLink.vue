<template lang="pug">
NuxtLink.link(:to="link") {{title}}
</template>

<script setup>
defineProps(['title', 'link'])
</script>

<style lang="scss" scoped>
.link {
	padding: 10px 50px;
	border-radius: $radius;
	@include transition;
	@include font(18, 26, 400, $white);
	background: $black;

	&:hover {
		background: $blue;
	}
}
</style>
