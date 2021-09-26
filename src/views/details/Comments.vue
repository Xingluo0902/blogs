<template>
  <div id="comments">
    <div class="reply">
      <div class="writerReply">
        <span>
          <img src="~assets/imge/noImage.svg"
               alt="">
        </span>
        <span>
          <strong>{{comment.userId}} ：</strong>
          {{comment.content}}</span>
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
  props: {
    comment: {
      type: Object,
      default () {
        return {}
      }
    },
  },
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
#comments {
  margin: 0 auto;
  margin-top: 7px;
  background-color: rgba(235, 232, 232, 0.2);
  border-radius: 2px;
  width: 533px;
}
.reply {
  width: 500px;
  height: 42px;
  display: flex;
  border-radius: 2px;
}
.reply div {
  display: flex;
  padding-left: 21px;
  /* border-bottom: 2px solid rgba(0, 0, 0, 0.1); */
  line-height: 42px;
  align-items: center;
}
.writerReply span:first-child {
  width: 31px;
  height: 31px;
  border-radius: 50%;
  border: 1px solid rgba(235, 232, 232, 0.4);
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
  font-size: 8px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 28px;
  cursor: pointer;
}
.active {
  color: #e67e22;
}
</style>