<template lang="pug">
Swiper.slider(v-if="content" ref="swiper"
  :modules="[SwiperNavigation]" navigation
  @slideChange="onSlideChange")
  SwiperSlide(v-for="(img, i) in content" :key="i" ref="swiperSlide")
    img.slider__img(:src="img")
  SliderPages(:content="content")
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import SliderPages from '@/components/ui/SliderPages.vue'
import bus from 'nuxt-bus'

defineProps(['content'])

const onSlideChange = () => {
	bus.emit('bus')
}
</script>

<style lang="scss" scoped>
.slider {
	&__img {
		margin: 0 auto;
		width: 100%;
		height: 320px;

		@include breakpoints(medium) {
			height: 550px;
			width: 83%;
		}
	}
}
</style>
