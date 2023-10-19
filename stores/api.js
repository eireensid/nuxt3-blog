import {defineStore} from "pinia"
import {ref} from "vue"
import {useRoute, useRuntimeConfig} from "nuxt/app"

export const useApiStore = defineStore('api', () => {
  const data = ref({})
  const route = useRoute()
  const config = useRuntimeConfig()

  const fetchData = async () => {
    data.value = await $fetch(config.public.apiPath + route.path)
      .catch((error) => error.data)
  }

  return { data, fetchData }
})