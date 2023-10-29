<template lang="pug">
footer.footer
  .wrapper
    .footer__top
      .footer__col
        Logo
        p.footer__text
          | Cтатьи о дизайне и искусстве, которые исследуют творческие вдохновения и актуальные тенденции, раскрывая мир эстетики и креативности
      .footer__col.footer__col--right
        .footer__contact
          span.footer__contact-title email
          a.footer__contact-value(href="mailto:testblogsupport@gmail.com" target="_blank") testblogsupport@gmail.com
        .footer__socials
          a.footer__social(href="/" target="_blank")
            Facebook
          a.footer__social(href="/" target="_blank")
            Vk
          a.footer__social(href="/" target="_blank")
            Instagram
          a.footer__social(href="/" target="_blank")
            Telegram
    SubscribeFormBlock
</template>

<script setup>
import Facebook from '@/assets/icons/facebook.svg'
import Vk from '@/assets/icons/vk.svg'
import Instagram from '@/assets/icons/instagram.svg'
import Telegram from '@/assets/icons/telegram.svg'
</script>

<style lang="scss">
.footer {
	border-top: 1px solid $gray;
	margin-top: auto;

	&__top {
		@include flex(flex-end, space-between);
		margin: 50px 0 70px;
		gap: 50px;
	}

	&__col {
		flex-basis: 50%;

		&--right {
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			padding-right: toRem(75);
			flex-basis: 20%;
		}
	}

	&__text {
		margin-top: 18px;
		@include font(14, 20, 400, $gray);
		max-width: 426px;
	}

	&__contact {
		display: flex;
		flex-direction: column;

		&-title {
			@include font(14, 20, 400, $gray);
		}

		&-value {
			@include transition;

			&:hover {
				color: $blue;
			}
		}
	}

	&__socials {
		align-self: flex-start;
		margin-top: 20px;
	}

	&__social {
		@include transition;

		&:not(:last-child) {
			margin-right: 20px;
		}

		&:hover {
			opacity: 0.7;
		}
	}
}
</style>
<script>
import SubscribeFormBlock from '@/components/blocks/SubscribeFormBlock.vue'
export default {
	components: { SubscribeFormBlock }
}
</script>
