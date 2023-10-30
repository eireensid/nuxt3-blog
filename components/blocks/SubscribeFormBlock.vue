<template lang="pug">
form.subscribe-form(@submit.prevent="submit" v-if="isShow")
  h3.subscribe-form__title Подпишись на рассылку
  .subscribe-form__col
    Input.subscribe-form__input(type="email" placeholder="Email" required="true" v-model="email"
      @input="checkEmail('.subscribe-form', email)")
    Button(title="Подписаться" type="submit")
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useNotification } from '@kyvg/vue3-notification'

defineProps(['content'])
const isShow = ref(false)
const email = ref('')
const { notify } = useNotification()

onMounted(() => {
	setTimeout(() => {
		isShow.value = true
	}, 1000)
})

const submit = () => {
	notify({ title: 'Спасибо за подписку!', text: 'Письмо отправлено на почту' })
	email.value = ''
}
</script>

<style lang="scss" scoped>
.subscribe-form {
	background: $black;
	border-radius: $radius;
	padding: 30px;
	@include flex(flex-start, space-between);

	@include breakpoints(medium) {
		@include flex(center, space-between);
	}

	&__col {
		@include breakpoints(medium) {
			@include flex(flex-end, flex-end);
			flex-basis: 50%;
			gap: 36px;
		}
	}

	&__title {
		@include font(22, 30, 800, $white);
		margin-bottom: 36px;

		@include breakpoints(medium) {
			margin-bottom: 0;
		}
	}

	&__input {
		margin-bottom: 36px;

		@include breakpoints(medium) {
			margin-bottom: 0;
		}
	}
}
</style>
