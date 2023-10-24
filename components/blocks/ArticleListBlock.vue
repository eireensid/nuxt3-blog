<template lang="pug">
.article-list(v-if="content")
  .article-list__card(v-for="article in content.articles")
    .article-list__card-img-wr
      img.article-list__card-img(:src="article.image" loading="lazy" :alt="article.title")
    h3.article-list__card-title {{article.title}}
    NuxtLink.article-list__card-btn(:to="article.link") Читать
</template>

<script setup>
defineProps(['content'])
</script>

<style lang="scss" scoped>
.article-list {
	margin: 30px 0 200px;
	display: flex;
	flex-wrap: wrap;
	gap: 30px;
	justify-content: center;

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
	}

	&__card-img {
		height: 100%;
		object-fit: cover;
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

	&__card-btn {
		@extend %buttonBlack;
	}
}
</style>
