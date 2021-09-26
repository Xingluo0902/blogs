<template>
  <div id="comments">
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
      <div class="replyLike">
        <span @click="replyLike"
              :class="{active:boolreplyLike}">&#xe619;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comments',
  data () {
    return {
      boolreplyLike: false,
    }
  },
  methods: {
    replyLike () {
      this.boolreplyLike = !this.boolreplyLike;
    },
  },
}
</script>

<style scoped>
.reply {
  width: 533px;
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