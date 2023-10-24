<template lang="pug">
Header
main.main
  Preloader(v-if="store.pending")
  .wrapper
    slot
Footer
</template>

<script setup>
import Header from '@/components/layout/Header.vue'
import Footer from '../components/layout/Footer.vue'
import Preloader from '../components/layout/Preloader.vue'
import { useApiStore } from '@/stores/api.js'

const store = useApiStore()
</script>
