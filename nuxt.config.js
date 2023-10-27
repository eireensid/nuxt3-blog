import svgLoader from 'vite-svg-loader'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			title: 'Test Blog',
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
		},
		pageTransition: { name: 'page', mode: 'out-in' }
	},
	css: ['~/assets/style/main.scss'],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData:
						'@use "./assets/style/_reset.scss" as *; @use "./assets/style/_helpers.scss" as *; @use "./assets/style/_variables.scss" as *; @use "./assets/style/_media.scss" as *;'
				}
			}
		},
		plugins: [svgLoader()]
	},
	modules: ['@pinia/nuxt', 'nuxt-swiper'],
	plugins: ['~/plugins/bus'],
	runtimeConfig: {
		public: {
			apiPath: process.env.API_PATH
		}
	},
	alias: {
		'@/assets': './assets',
		'@/components': './components',
		'@/stores': './stores'
	},
	components: [
		{
			global: true,
			path: '~/components',
			pathPrefix: false
		}
	]
})
