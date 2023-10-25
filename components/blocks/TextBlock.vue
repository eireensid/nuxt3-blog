<template lang="pug">
.text-block(v-if="content")
  .text-block__content(v-html="content")
</template>

<script setup>
defineProps(['content'])
</script>

<style lang="scss">
.text-block {
	display: flex;
	justify-content: center;

	&__content {
		max-width: 884px;

		h2 {
			@extend %title;
			margin-bottom: 50px;
		}

		p {
			&:not(:last-child) {
				margin-bottom: 20px;
			}
		}

		blockquote {
			margin: 40px 0 0;

			p {
				font-style: italic;
				margin-bottom: 15px;
				overflow: hidden;
			}

			footer {
				@include font(14, 20, 400, $gray);
				max-width: 250px;
				margin-left: 116px;
			}

			&:before {
				content: '';
				background: url('@/assets/icons/quotes.svg');
				width: 80px;
				height: 64px;
				display: inline-block;
				float: left;
				margin-right: 36px;
			}
		}
	}
}
</style>
