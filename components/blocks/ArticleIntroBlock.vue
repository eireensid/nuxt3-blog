<template lang="pug">
.article-intro(v-if="content")
  .article-intro__img-wr
    img.article-intro__img(:src="content.image" loading="lazy" :alt="content.title")
  .article-intro__content
    h1.article-intro__title {{content.title}}
    .article-intro__info
      .article-intro__info-col.article-intro__info-col--center
        .article-intro__info-ico-wr
          TimeIcon.article-intro__info-ico
        .article-intro__info-ico-wr
          EyeIcon.article-intro__info-ico
      .article-intro__info-col
        span.article-intro__info-text {{content.reading_time}} мин время чтения
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
		height: 580px;
		background: $gray;
		flex-shrink: 0;
		border-radius: 2px 220px 2px 2px;
	}

	&__img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: inherit;
	}

	&__title {
		@include font(56, 66, 800);
		margin-bottom: 30px;
	}

	&__info {
		display: flex;
		margin-bottom: 50px;
		gap: 8px;
	}

	&__info-col {
		display: flex;
		flex-direction: column;
		gap: 4px;

		&--center {
			align-items: center;
			justify-content: center;
		}
	}

	&__info-ico-wr {
		width: 16px;
		height: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	&__info-ico {
		width: 16px;
		height: 16px;
		fill: $gray;
	}

	&__info-text {
		@include font(14, 20, 400, $gray);
	}
}
</style>
