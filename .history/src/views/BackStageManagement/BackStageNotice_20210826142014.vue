<template>
  <div id="backStageNotice">
    <div class="noticeItem">
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
  height: 38px;
  background-color: skyblue;
  align-items: center;
}
p {
  flex: 12;
}
.btn {
  height: 20px;
  width: 41px;
}
</style>