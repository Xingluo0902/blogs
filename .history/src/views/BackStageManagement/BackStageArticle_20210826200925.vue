<template>
  <div>
    <back-stage-article-items v-for="(item,index) in ids"
                              :key="index"
                              :item='item'></back-stage-article-items>
  </div>
</template>

<script>

import BackStageArticleItems from '@/views/backStageManagement/BackStageArticleItems'

export default {
  name: 'BackStageArticle',
  components: {
    BackStageArticleItems
  },
  data () {
    return {
      ids: [{ title: 'Java', id: 1 }, { title: 'JavaScript', id: 2 }]
    }
  },

}
</script>

<style scoped>
</style>