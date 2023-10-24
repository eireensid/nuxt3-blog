<template lang="pug">
header.header
  NuxtLink.header__logo-wr(to="/")
    img.header__logo(src="@/assets/img/logo.svg" alt="Test blog")
</template>

<style lang="scss">
.header {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 85px;
	background: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 20;
}
</style>
