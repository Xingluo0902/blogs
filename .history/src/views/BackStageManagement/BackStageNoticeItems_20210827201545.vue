<template>
  <div>
    <div class="noticeItem">
      <span class="time">{{notice.datetime}}</span>
      <h4>{{notice.noticeTitle}}</h4>
      <p>{{notice.noticeContent}}</p>
      <el-button type="primary"
                 class="btn"
                 @click="removeNotice">删除</el-button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    notice: {
      type: Object,
      default () {
        return {}
      }
    },
  },
  name: 'BackStageNoticeItems'
}
</script>

<style scoped>
.noticeItem {
  display: flex;
  height: 32px;
  width: 623px;
  align-items: center;
  font-size: 8px;
  margin-top: 15px;
  margin-left: 14px;
  border-bottom: 1px solid rgb(218, 218, 218, 0.8);
}
.time {
  flex: 2;
  font-weight: 550;
  padding: 0 15px;
  color: rgb(182, 182, 182);
}
h4 {
  flex: 1;
}
p {
  flex: 10;
}
.btn {
  height: 20px;
  width: 41px;
}
</style>