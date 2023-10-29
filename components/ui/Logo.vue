<template lang="pug">
NuxtLink.logo(to="/" @click="scrollTop")
  Logo.logo__ico
</template>

<script setup>
import Logo from '@/assets/img/logo.svg'

const scrollTop = () => {
	window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style lang="scss">
.logo {
	@include transition;
	will-change: transform;

	&:hover {
		transform: scale(1.05);
	}

	&__ico {
		max-width: 133px;
	}
}
</style>
