<template lang="pug">
form.subscribe-form(@submit.prevent="submit")
  h3.subscribe-form__title Подпишись на рассылку
  .subscribe-form__col
    Input(type="email" placeholder="Email" required="true" v-model="email")
    Button(title="Подписаться" type="submit")
</template>

<script setup>
import { ref } from 'vue'
import { useNotification } from '@kyvg/vue3-notification'

defineProps(['content'])

const email = ref('')
const { notify } = useNotification()

function validateEmail(email) {
	var re = /\S+@\S+\.\S+/
	return re.test(email)
}

const submit = () => {
	if (validateEmail(email.value)) {
		notify({ title: 'Спасибо за подписку!', text: 'Письмо отправлено на почту' })
		email.value = ''
	}
}
</script>

<style lang="scss" scoped>
.subscribe-form {
	background: $black;
	border-radius: $radius;
	padding: 30px;
	@include flex(center, space-between);

	&__col {
		@include flex(flex-end, flex-end);
		flex-basis: 50%;
		gap: 36px;
	}

	&__title {
		@include font(22, 30, 800, $white);
	}
}
</style>
