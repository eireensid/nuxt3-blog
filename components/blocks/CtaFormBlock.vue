<template lang="pug">
.cta-form
  img.cta-form__img(src="@/assets/img/cta-photo.jpg" loading="lazy" alt="Стань участником проекта")
  form.cta-form__form(@submit.prevent="submit")
    fieldset.cta-form__fieldset
      legend.cta-form__title Стань участником проекта
      Input.cta-form__input(type="text" placeholder="Имя" required="true" v-model="formData.name")
      Input.cta-form__input(type="tel" placeholder="Телефон" required="true" v-model="formData.phone"
        v-maska data-maska="+7(###)###-##-##" @change="checkPhone")
      Input.cta-form__input(type="email" placeholder="Email" required="true" v-model="formData.email" @change="checkEmail")
    Button.cta-form__btn(title="Присоединиться" type="submit")
</template>

<script setup>
import { reactive } from 'vue'
import { useNotification } from '@kyvg/vue3-notification'

defineProps(['content'])
const { notify } = useNotification()

const formData = reactive({
	name: '',
	phone: '',
	email: ''
})

function checkPhone() {
	let field = document.querySelector('.cta-form input[type="tel"]')

	if (formData.phone.length < 16) {
		field.setCustomValidity('Пожалуйста, введите телефон полностью!')
		field.reportValidity()
		return false
	}

	field.setCustomValidity('')
}

function checkEmail() {
	let field = document.querySelector('.cta-form input[type="email"]')

	if (!formData.email.includes('@')) {
		field.setCustomValidity('Адрес электронной почты должен содержать символ "@"')
		field.reportValidity()
		return false
	} else if (!formData.email.includes('.')) {
		field.setCustomValidity('Адрес электронной почты должен содержать символ "."')
		field.reportValidity()
		return false
	}

	field.setCustomValidity('')
}

const clearForm = () => {
	formData.name = ''
	formData.phone = ''
	formData.email = ''
}

const submit = () => {
	notify({ title: 'Форма успешно отправлена!' })
	clearForm()
}
</script>

<style lang="scss" scoped>
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
