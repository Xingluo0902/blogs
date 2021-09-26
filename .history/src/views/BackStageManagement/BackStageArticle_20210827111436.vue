<template>
  <div>
    <back-stage-article-items v-for="(article,index) in articles"
                              :key="index"
                              :item='article'></back-stage-article-items>
  </div>
</template>

<script>

import BackStageArticleItems from '@/views/backStageManagement/BackStageArticleItems'
import { loadArticles } from '@/netWork/require'
export default {
  name: 'BackStageArticle',
  components: {
    BackStageArticleItems
  },
  data () {
    return {
      articles: []
    }
  },
  created () {
    // loadArticles().then(res => {
    //   console.log(res);
    // }).catch(err => {
    //   console.log(err);
    // })
  },
}
</script>

<style scoped>
</style>