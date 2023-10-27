import { defineNuxtPlugin } from 'nuxt/app'
import bus from 'nuxt-bus'

export default defineNuxtPlugin(() => ({ provide: { bus } }))
