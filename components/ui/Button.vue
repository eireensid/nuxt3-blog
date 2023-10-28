<template lang="pug">
button.button(:class="className") {{title}}
</template>

<script setup>
defineProps(['title', 'className'])
</script>

<style lang="scss">
.button {
	padding: 10px 50px;
	border-radius: $radius;
	@include transition;
	@include font(18, 26, 400, $white);

	&.black {
		background: $black;

		&:hover {
			background: $blue;
		}
	}

	&.blue {
		background: $blue;
		border: 1px solid $blue;

		&:hover {
			background: transparent;
		}
	}
}
</style>
