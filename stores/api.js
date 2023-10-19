import {defineStore} from "pinia"
import {ref} from "vue"
import {useRoute} from "nuxt/app";

export const useApiStore = defineStore('api', () => {
  const data = ref({})
  const route = useRoute()

  const fetchData = async () => {
    data.value = await $fetch(`https://devtwit8.ru/api/v1/page/?path=${route.path}`)
      .catch((error) => error.data)
  }

  return { data, fetchData }
})