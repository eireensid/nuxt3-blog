<template lang="pug">
.article-intro(v-if="content")
  .article-intro__img-wr
    img.article-intro__img(:src="content.image" :alt="content.title")
  .article-intro__content
    h1.article-intro__title {{content.title}}
    .article-intro__info
      .article-intro__info-row
        TimeIcon.article-intro__info-ico
        span.article-intro__info-text {{content.reading_time}} мин время чтения
      .article-intro__info-row
        EyeIcon.article-intro__info-ico
        span.article-intro__info-text {{content.views_count}} прочитали статью
    p.article-intro__text(v-html="content.short_description")
</template>

<script setup>
import TimeIcon from '@/assets/icons/time.svg'
import EyeIcon from '@/assets/icons/eye.svg'

defineProps(['content'])
</script>

<style lang="scss" scoped>
.article-intro {
	@include flex;
	gap: 30px;

	&__img-wr {
		max-width: 540px;
		max-height: 580px;
		background: $gray;
		flex-shrink: 0;
		@extend %imgCustomRadius;
	}

	&__img {
		width: 100%;
		height: 100%;
		border-radius: inherit;
	}

	&__content {
		@extend %fields;
	}

	&__title {
		@include font(32, 42, 800);
		margin-bottom: 30px;

		@include breakpoints(large) {
			@include font(56, 66, 800);
		}
	}

	&__info {
		display: flex;
		flex-direction: column;
		margin-bottom: 50px;
		gap: 4px;
	}

	&__info-row {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	&__info-ico {
		width: 16px;
		height: 16px;
		fill: $gray;

		&:first-child {
			padding-top: 2px;
		}
	}

	&__info-text {
		@include font(14, 20, 400, $gray);
	}
}
</style>
