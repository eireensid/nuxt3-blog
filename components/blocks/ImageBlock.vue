<template lang="pug">
figure.image(v-if="content")
  img.image__img(:src="content.src" loading="lazy" :alt="content.caption")
  figcaption.image__caption {{content.caption}}
</template>

<script setup>
defineProps(['content'])
</script>

<style lang="scss" scoped>
.image {
	margin: 0;

	@include breakpoints(small) {
		padding: 0 16px;
	}

	@include breakpoints(xlarge) {
		padding: 0;
	}

	&__img {
		width: 100%;
		height: 320px;
		background: $gray;
		@extend %imgCustomRadius;

		@include breakpoints(small) {
			height: 420px;
		}

		@include breakpoints(medium) {
			height: 550px;
		}
	}

	&__caption {
		text-align: right;
		max-width: 198px;
		margin-left: auto;
		@include font(14, 20, 400, $gray);
		padding-top: 15px;
	}
}
</style>
