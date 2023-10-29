<template lang="pug">
.article-list(v-if="content")
  h2.article-list__title(v-if="route.path !== '/'") {{content.title}}
  .article-list__cards
    .article-list__card(v-for="(article, i) in content.articles" :key="i")
      .article-list__card-img-wr
        img.article-list__card-img(:src="article.image" loading="lazy" :alt="article.title")
      h3.article-list__card-title {{article.title}}
      CustomLink.article-list__card-btn(:link="article.link" title="Читать")
</template>

<script setup>
import { useRoute } from 'nuxt/app'

defineProps(['content'])

const route = useRoute()
</script>

<style lang="scss" scoped>
.article-list {
	&__title {
		@extend %title;
		margin-bottom: 50px;
	}

	&__cards {
		display: flex;
		flex-wrap: wrap;
		gap: 30px;
		justify-content: center;
	}

	&__card {
		max-width: 426px;
	}

	&__card-img-wr,
	&__card-img {
		width: 100%;
	}

	&__card-img-wr {
		height: 320px;
		background: $gray;
		border-radius: 2px;
	}

	&__card-img {
		height: 100%;
		object-fit: cover;
		border-radius: inherit;
	}

	&__card-title {
		margin: 20px 0 30px;
		@include font(22, 30, 800);
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		height: toRem(60);
	}
}
</style>
