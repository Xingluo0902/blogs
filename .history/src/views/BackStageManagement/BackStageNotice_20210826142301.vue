<template>
  <div id="backStageNotice">
    <div class="noticeItem">
      <span class="time">time</span>
      <p>xxxxxx</p>
      <el-button type="primary"
                 class="btn">删除</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BackStageNotice'
}
</script>

<style scoped>
.noticeItem {
  display: flex;
  height: 32px;
  align-items: center;
  font-size: 8px;
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