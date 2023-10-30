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
	@extend %fields;

	&__content {
		max-width: 884px;

		h2 {
			@extend %title;
			margin-bottom: 50px;
		}

		h3 {
			@include font(22, 30, 800);
			margin-bottom: 30px;
		}

		p {
			&:not(:last-child) {
				margin-bottom: 20px;
			}
		}

		ul {
			max-width: 610px;
			margin: 0 auto 20px;
		}

		li {
			&:before {
				content: '';
				display: inline-block;
				width: 8px;
				height: 8px;
				border-radius: 1px;
				background: $black;
				transform: rotate(45deg);
				margin: 0 10px 2px 0;
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
				margin-left: 38px;

				@include breakpoints(medium) {
					margin-left: 116px;
				}
			}

			&:before {
				content: '';
				background-image: url('@/assets/icons/quotes.svg');
				width: 40px;
				height: 24px;
				display: inline-block;
				float: left;
				background-size: 70%;
				background-repeat: no-repeat;

				@include breakpoints(medium) {
					background-size: 100%;
					width: 80px;
					height: 64px;
					margin-right: 36px;
				}
			}
		}
	}
}
</style>
