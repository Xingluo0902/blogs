<template>
  <div id="backStageNotice">
    <el-button type="primary"
               @click="pulishNotice"
               class="toPublish">发布新公告</el-button>
    <back-stage-notice-items v-for="(notice,index) in notice"
                             :key="index"
                             :notice='notice'></back-stage-notice-items>
  </div>
</template>

<script>
import BackStageNoticeItems from '@/views/backStageManagement/BackStageNoticeItems'
import { getAllNotice } from '@/netWork/require'
export default {
  name: 'BackStageNotice',
  data () {
    return {
      notices: []
    }
  },
  components: {
    BackStageNoticeItems
  },
  created () {
    // getAllNotice().then(res =>{
    //   console.log(res);
    //   this.notice = res.data;

    // }).catch(err => {console.log(err)})
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