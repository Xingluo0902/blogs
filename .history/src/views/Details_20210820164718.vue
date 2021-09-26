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
              :class="{active:boolCollection}">&#xe648;</span>
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
.introduction span:nth-child(3) {
  margin: 19px 39px;
  color: #909399;
  font-size: 16px;
  font-weight: 600;
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
  display: flex;
}
.feature span {
  font-family: "iconfont";
  font-size: 20px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 10px;
  cursor: pointer;
}
.feature span:hover {
  color: #e67e22;
}
.active {
  color: #e67e22;
}
</style>