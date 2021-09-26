<template>
  <div>
    <back-stage-article-items v-for="(article,index) in articles"
                              :key="index"
                              :article='article'></back-stage-article-items>
  </div>
</template>

<script>

import BackStageArticleItems from '@/views/backStageManagement/BackStageArticleItems'
import { backStageLoadArticle } from '@/netWork/require'
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
    backStageLoadArticle().then(res => {
      console.log(res);
      // this.articles = res.data;
    }).catch(err => {
      console.log(err);
    })
  },
}
</script>

<style scoped>
</style>