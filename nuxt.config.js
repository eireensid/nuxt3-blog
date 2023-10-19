// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			title: 'Тестовое задание Fruktorum',
			link: [
				{
					rel: 'icon',
					type: 'image/svg+xml',
					href: '/logo.svg'
				},
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css?family=Montserrat:ital,wght@0,400;0,800;1,300'
				}
			]
		}
	},
	css: ['~/assets/style/reset.scss'],
	modules: ['@pinia/nuxt'],
	runtimeConfig: {
		public: {
			apiPath: process.env.API_PATH
		}
	},
	alias: {
		'@/assets': './assets',
		'@/components': './components',
		'@/stores': './stores'
	}
})
