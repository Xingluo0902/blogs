<template>
  <div id="backStageNotice">
    <el-button type="primary"
               @click="pulishNotice"
               class="btn">发布新公告</el-button>
    <div class="noticeItem">
      <span class="time">2021-8-26</span>
      <p>xxxxxx</p>
      <el-button type="primary"
                 class="btn">删除</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BackStageNotice',
  methods: {
    pulishNotice () {
      this.$router.push('publishnotice')
    }
  }
}
</script>

<style scoped>
.btn {
  /* margin-top: 5px; */
  margin-left: 8px;
}
.noticeItem {
  display: flex;
  height: 32px;
  align-items: center;
  font-size: 8px;
  margin-top: 15px;
  border-bottom: 1px solid rgb(218, 218, 218, 0.8);
}
.time {
  font-weight: 550;
  padding: 0 15px;
  color: rgb(182, 182, 182);
}
p {
  flex: 1;
}
.btn {
  height: 20px;
  width: 41px;
}
</style>