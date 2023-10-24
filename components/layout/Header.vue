<template lang="pug">
header.header
  NuxtLink.header__logo-wr(to="/" @click="scrollTop")
    img.header__logo(src="@/assets/img/logo.svg" alt="Test blog")
</template>

<script setup>
const scrollTop = () => {
	window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style lang="scss">
.header {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 85px;
	background: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 20;

	&__logo {
		@include transition;
		will-change: transform;

		&:hover {
			transform: scale(1.05);
		}
	}
}
</style>
