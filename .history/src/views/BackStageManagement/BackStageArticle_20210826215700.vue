<template>
  <div>
    <back-stage-article-items v-for="(item,index) in article"
                              :key="index"
                              :item='item'></back-stage-article-items>
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
      article: []
    }
  },
  created () {
    loadArticles().then(res => {
      this.article = res.data
    });
  },
}
</script>

<style scoped>
</style>