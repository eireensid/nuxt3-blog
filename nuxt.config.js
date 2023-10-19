// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Тестовое задание Fruktorum'
    }
  },
  css: [
    "~/assets/style/reset.scss"
  ],
  modules: ['@pinia/nuxt']
  // alias: {
  //   "@Components": "./components",
  // }
})
