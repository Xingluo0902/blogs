<template>
  <div id="details">
    <nav-bar></nav-bar>
    <div class="details">
      <h1>标题</h1>
      <div class="introduce">
        <span>原创</span>
        <span>作者：xxx</span>
        <span>时间：2021-8-21</span>
        <span>版权</span>
      </div>
    </div>
    <div class="article">
      <p>文章</p>
    </div>

    <div class="end">
      <div class="endWriter">
        <span>
          <img src="~assets/imge/wallhaven-q6o81d_1920x1080.png"
               alt="">
        </span>
        <span>作者：xxx</span>
      </div>
      <div class="endIcon">
        <span @click="like"
              :class="{active:boolLike}">&#xe619;</span>
        <span @click="collection"
              :class="{active:boolCollection}">&#xe61a;</span>
      </div>
    </div>
    <div class="comment">
      <el-input type="textarea"
                :autosize="{ minRows: 2}"
                placeholder="优质的评论能够帮助博主获得更高的声誉"
                v-model="textarea"
                style="width:880px">
      </el-input>
      <el-button type="primary">发表</el-button>
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

import NavBar from '@/views/navBar/NavBar'

export default {
  name: 'Details',
  data () {
    return {
      boolLike: false,
      boolCollection: false,
      boolComment: false,
      boolreplyLike: false,
      textarea: '',
    }
  },
  methods: {
    like () {
      console.log('like')
      this.boolLike = !this.boolLike;
    },
    collection () {
      console.log('collection')
      this.boolCollection = !this.boolCollection;
    },
    replyLike () {
      this.boolreplyLike = !this.boolreplyLike;
    },
    commentReply () {
      console.log('commentReply')
    }
  },
  components: {
    NavBar
  }
}
</script>

<style scoped>
#details {
  width: 560px;
  margin: 0 auto;
  background-color: #fff;
}
.details {
  margin-top: 33px;
}
h1 {
  width: 533px;
  margin: 0 auto;
  margin-top: 10px;
}
.introduce {
  display: flex;
  width: 533px;
  height: 58px;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 5px;
  background-color: rgb(250, 246, 246);
  font-size: 8px;
}
.introduce span:first-child {
  width: 35px;
  height: 20px;
  background-color: #f8bfbf;
  color: azure;
  border-radius: 5px;
  line-height: 20px;
  text-align: center;
  font-weight: 600;
  cursor: progress;
}
.introduce span:nth-child(2),
.introduce span:nth-child(3),
.endWriter span:last-child {
  margin: 19px 39px;
  font-size: 8px;
  color: #909399;
  font-weight: 600;
}
.introduce span:nth-child(4) {
  color: #409eff;
  margin-top: 40px;
  margin-left: 198px;
}
.article {
  width: 533px;
  margin: 20px auto;
  height: 300px;
  background-color: skyblue;
}

.endWriter span:last-child {
  margin: 0 15px;
}
.endIcon span,
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
.endIcon span {
  margin: 0 18;
}
.feature span:hover {
  color: #e67e22;
}
.active {
  color: #e67e22;
}
.end {
  display: flex;
  width: 533px;
  height: 38px;
  margin: 0 auto;
  box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.1);
}
.endWriter {
  flex: 1;
  display: flex;
  align-items: center;
  padding-left: 18px;
}
.endWriter span:first-child {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
}
.endIcon {
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  padding-right: 10px;
}
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
</style>


