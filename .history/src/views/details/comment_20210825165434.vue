<template>
  <div id="comment">
    <div class="comment">
      <el-input type="textarea"
                :autosize="{ minRows: 2}"
                placeholder="优质的评论能够帮助博主获得更高的声誉..."
                v-model="textarea"
                style="width:999px">
      </el-input>
      <el-button type="primary"
                 style="height:54px;margin-left:12px">发表</el-button>
      <div class="reply"
           v-for="item in 5"
           :key='item'>
        <div class="writerReply">
          <span>
            <img src="~assets/imge/wallhaven-q6o81d_1920x1080.png"
                 alt="">
          </span>
          <span>
            <strong>xxx：</strong>
            xxxxxxx</span>
        </div>
        <div class="replyLike">
          <span @click="replyLike"
                :class="{active:boolreplyLike}">&#xe619;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.comment {
  width: 533px;
  margin: 0 auto;
  margin-top: 6px;
}
.reply {
  width: 100%;
  height: 42px;
  display: flex;
}
.reply div {
  display: flex;
  padding-left: 34px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
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
.replyLike {
  flex: 1;
  display: flex;
  flex-direction: row-reverse;
}
.replyLike span {
  font-family: "iconfont";
  font-size: 12px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 28px;
  cursor: pointer;
}
</style>