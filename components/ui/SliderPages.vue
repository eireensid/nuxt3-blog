<template lang="pug">
.slider__pages {{activePage}} / {{content.length}}
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useSwiper } from 'swiper/vue'
import bus from 'nuxt-bus'
const swiper = useSwiper()
const activePage = ref(1)

defineProps(['content'])

onMounted(() => {
	bus.on('bus', $event => {
		activePage.value = swiper.value.activeIndex + 1
	})
})
</script>

<style lang="scss" scoped>
.slider {
	&__pages {
		display: flex;
		justify-content: center;
		margin-top: 25px;
	}
}
</style>
