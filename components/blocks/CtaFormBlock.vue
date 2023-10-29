<template lang="pug">
.cta-form
  img.cta-form__img(src="@/assets/img/cta-photo.jpg" alt="Стань участником проекта")
  form.cta-form__form(@submit.prevent="submit")
    fieldset.cta-form__fieldset
      legend.cta-form__title Стань участником проекта
      Input.cta-form__input(type="text" placeholder="Имя" required="true" v-model="name")
      Input.cta-form__input(type="tel" placeholder="Телефон" required="true" v-model="phone")
      Input.cta-form__input(type="email" placeholder="Email" required="true" v-model="email")
    Button.cta-form__btn(title="Присоединиться" className="blue" type="submit")
</template>

<script setup>
import { ref } from 'vue'

defineProps(['content'])
const { notify } = useNotification()

const name = ref('')
const phone = ref('')
const email = ref('')

function validateEmail(email) {
	var re = /\S+@\S+\.\S+/
	return re.test(email)
}

const submit = () => {
	if (validateEmail(email.value)) {
		notify({ title: 'Форма успешно отправлена!' })
	}
}
</script>

<style lang="scss">
.cta-form {
	background: $black;
	border-radius: $radius;
	padding: 30px;
	gap: 30px;
	@include flex(center, space-between);

	&__img {
		max-width: 595px;
		height: 326px;
	}

	&__form {
		flex-basis: 50%;
	}

	&__title {
		@extend %title;
		color: $white;
		margin-bottom: 35px;
	}

	&__input {
		margin-bottom: 30px;
	}

	&__btn {
		margin-top: 18px;
	}
}
</style>
