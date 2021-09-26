<template>
  <div>
    <back-stage-comment-items v-for="(comment,index) in comments"
                              :key="index"
                              :comment='comments'></back-stage-comment-items>
  </div>
</template>

<script>

import BackStageCommentItems from '@/views/backStageManagement/BackStageCommentItems'
import { getAllComments } from '@/netWork/require'
export default {
  name: 'BackStageComments',
  data () {
    return {
      comments: [{}],
    }
  },
  created () {
    getAllComments().then(res => {
      console.log(res);
      // this.comments = res.data;
    }).catch(err => {
      console.log(err);
    })
  },
  components: {
    BackStageCommentItems
  }
}
</script>

<style lang="scss" scoped>
</style>