<template>
  <div id="details">
    <nav-bar></nav-bar>
    <div class="details">
      <h1>标题</h1>
      <div class="introduction">
        <span class="creation">原创</span>
        <span class="writer">作者：xxx</span>
        <span class="time">时间：2021-8-20</span>
        <span class="banquan">版权</span>
      </div>
      <div class="feature">
        <span @click="like"
              :class="{active:boolLike}">&#xe619;</span>
        <span @click="collection"
              :class="{active:boolCollection}">&#xe61a;;</span>
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
              :class="{active:boolCollection}">&#xe629;</span>
      </div>
    </div>
    <div class="comment">
      <el-input type="textarea"
                :autosize="{ minRows: 2, maxRows: 4}"
                placeholder="优质的评论能够帮助博主获得更高的声誉"
                v-model="textarea">
      </el-input>
      <div class="reply">
        <div>111</div>
        <div>222</div>
        <div>333</div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/views/NavBar'
export default {
  name: 'Details',
  data () {
    return {
      boolLike: false,
      boolCollection: false,
      boolComment: false,
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

    }
  },
  components: {
    NavBar
  }
}
</script>

<style scoped>
.details {
  margin-top: 50px;
  width: 100vw;
}
h1 {
  width: 78%;
  margin: 0 auto;
  padding: 35px 0 24px 0;
}
.introduction {
  width: 78%;
  height: 78px;
  margin: 0 auto;
  background-color: rgb(250, 246, 246);
  display: flex;
}

.introduction span:first-child {
  width: 58px;
  height: 36px;
  background-color: #f8bfbf;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  line-height: 36px;
  color: antiquewhite;
  text-align: center;
  transform-origin: left top;
  transform: rotateZ(0);
  perspective: 200px;
  cursor: progress;
}
.introduction span:nth-child(2),
.introduction span:nth-child(3),
.endWriter span:last-child {
  margin: 19px 39px;
  color: #909399;
  font-size: 16px;
  font-weight: 600;
}
.endWriter span:last-child {
  margin: 0 39px;
}
.introduction span:nth-child(3) {
  margin-top: 26px;
}
.introduction span:nth-child(4) {
  color: #409eff;
  margin-top: 46px;
  margin-left: 715px;
}
.feature {
  margin-top: -53px;
  margin-left: 627px;
  display: flex;
}
.feature span,
.endIcon span {
  font-family: "iconfont";
  font-size: 24px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 28px;
  cursor: pointer;
}
.endIcon span {
  margin: 0 18;
  font-size: 18px;
}
.feature span:hover {
  color: #e67e22;
}
.active {
  color: #e67e22;
}
.article {
  width: 78%;
  margin: 71px auto;
  height: 500px;
  background-color: skyblue;
}
.end {
  display: flex;
  width: 78%;
  height: 68px;
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
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
}
.endIcon {
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  padding-right: 18px;
}
.comment {
  width: 78%;
  margin: 0 auto;
  margin-top: 15px;
}
.reply {
  margin-top: 15px;
}
.reply span {
  padding-left: 34px;
  margin-top: 8px;
  width: 78%;
  border-top: 2px solid rgba(0, 0, 0, 0.1);
  height: 48px;
  line-height: 48px;
}
</style>