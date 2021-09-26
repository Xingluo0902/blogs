<template>
  <div id="backCommentItems">
    <div class="reply">
      <div class="writerReply">
        <span>
          <img src="~assets/imge/wallhaven-q6o81d_1920x1080.png"
               alt="">
        </span>
        <span>
          <strong>xxx：</strong>
          xxxxxxx</span>
      </div>
      <div class="btn">
        <el-button type="primary"
                   class="audit"
                   @click="audit">{{status}}</el-button>
        <el-button type="danger"
                   class="delete"
                   @click="remove">删除</el-button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'BackCommentItems',
}
</script>

<style scoped>
#backCommentItems {
  padding-left: 8px;
}
.reply {
  width: 613px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  height: 42px;
  display: flex;
}
.reply div {
  display: flex;
  padding-left: 34px;

  line-height: 42px;
  align-items: center;
}
.writerReply span:first-child {
  width: 31px;
  height: 31px;
  border-radius: 50%;
  overflow: hidden;
}
.writerReply span:nth-child(2) {
  margin-left: 10px;
  font-size: 8px;
}
.writerReply span:last-child {
  margin-left: 12px;
  font-size: 8px;
  cursor: pointer;
}
.btn {
  flex: 1;
  display: flex;
  align-items: center;
}
.audit,
.delete {
  flex: 1;
  height: 20px;
  margin: 0 6px;
}
</style>