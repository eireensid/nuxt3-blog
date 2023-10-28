<template lang="pug">
.subscribe-form
  h3.subscribe-form__title Подпишись на рассылку
  .subscribe-form__col
    Input(placeholder="Email")
    Button(title="Подписаться" className="blue")
</template>

<script setup>
defineProps(['content'])
</script>

<style lang="scss">
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
