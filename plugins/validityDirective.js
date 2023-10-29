import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin(app => {
	app.vueApp.directive('validity', {
		mounted(el, binding) {
			el.setCustomValidity(binding.value ? binding.value : '')
		}
	})
})
