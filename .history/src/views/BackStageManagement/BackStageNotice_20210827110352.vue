<template>
  <div id="backStageNotice">
    <el-button type="primary"
               @click="pulishNotice"
               class="toPublish">发布新公告</el-button>
    <back-stage-notice-items></back-stage-notice-items>
  </div>
</template>

<script>
import BackStageNoticeItems from '@/views/backStageManagement/BackStageNoticeItems'
export default {
  name: 'BackStageNotice',
  components: {
    BackStageNoticeItems
  },
  methods: {
    pulishNotice () {
      this.$router.push('publishnotice')
    }
  }
}
</script>

<style scoped>
.toPublish {
  margin-top: 8px;
  margin-left: 8px;
}
</style>