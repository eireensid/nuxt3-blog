<template lang="pug">
.article-intro(v-if="content")
  .article-intro__img-wr
    img.article-intro__img(:src="content.image" loading="lazy" :alt="content.title")
  .article-intro__content
    h3.article-intro__title {{content.title}}
    .article-intro__info
      .article-intro__info-row
        NuxtIcon(name="time")
        span.article-intro__info-text {{content.reading_time}} мин время чтения
      .article-intro__info-row
        NuxtIcon(name="eye")
        span.article-intro__info-text {{content.views_count}} прочитали статью
    .article-intro__text(v-html="content.short_description")
</template>

<script setup>
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
		flex-direction: column;
		gap: 4px;
		margin-bottom: 50px;
	}

	&__info-row {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	&__info-text {
		@include font(14, 20, 400, $gray);
	}

	&__text {
		@extend %description;
	}
}
</style>
