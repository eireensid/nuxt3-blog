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

	&__img {
		width: 100%;
		height: 550px;
		background: $gray;
		border-radius: 2px 220px 2px 2px;
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
