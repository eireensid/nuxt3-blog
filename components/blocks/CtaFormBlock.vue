<template lang="pug">
.cta-form
  img.cta-form__img(src="@/assets/img/cta-photo.jpg" loading="lazy" alt="Стань участником проекта")
  form.cta-form__form(@submit.prevent="submit")
    fieldset.cta-form__fieldset
      legend.cta-form__title Стань участником проекта
      Input.cta-form__input(type="text" placeholder="Имя" required="true" v-model="formData.name")
      Input.cta-form__input(type="tel" placeholder="Телефон" required="true" v-model="formData.phone"
        v-maska data-maska="+7(###)###-##-##" @input="checkPhone('.cta-form', formData.phone)")
      Input.cta-form__input(type="email" placeholder="Email" required="true" v-model="formData.email"
        @input="checkEmail('.cta-form', formData.email)")
    Button.cta-form__btn(title="Присоединиться" type="submit")
</template>

<script setup>
import { reactive } from 'vue'
import { useNotification } from '@kyvg/vue3-notification'
import { checkPhone, checkEmail } from '@/composables/customValidity.js'

defineProps(['content'])
const { notify } = useNotification()

const formData = reactive({
	name: '',
	phone: '',
	email: ''
})

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
