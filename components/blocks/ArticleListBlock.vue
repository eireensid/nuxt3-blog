<template lang="pug">
.article-list(v-if="content")
  .article-list__card(v-for="article in content.articles")
    .article-list__card-img-wr
      img.article-list__card-img(:src="article.image")
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
	}

	&__card-img {
		height: 100%;
		object-fit: cover;
	}

	&__card-title {
		margin: 20px 0 30px;
	}
}
</style>
