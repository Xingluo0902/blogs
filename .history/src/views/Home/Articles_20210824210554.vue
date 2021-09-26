<template>
  <div id="articles">
    <article-item v-for="(article,key) in articles"
                  :key="key">
      <template v-slot:title>{{article.title}} </template>
      <template v-slot:content>{{article.content}}}</template>
    </article-item>
  </div>
</template>

<script>
import ArticleItem from '@/views/Home/ArticleItem';
export default {
  name: 'Articles',
  components: {
    ArticleItem
  },
  props: {
    articles: {
      type: Array
    }
  },
  data () {
    return {
      boolLike: false,
      boolCollection: false,
      boolComment: false,
    }
  },
  methods: {
    toDetails () {
      this.$router.push('/details');
    },
  },
}
</script>

<style scoped>
#articles {
  padding-top: 10px;
  cursor: pointer;
}
</style>