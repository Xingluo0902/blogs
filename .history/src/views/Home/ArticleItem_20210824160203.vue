<template>
  <div id="articleItem">
    <div class="container"
         @click="toDetails">
      <div class="imge">
        <img src="~assets/imge/wallhaven-q6o81d_1920x1080.png"
             alt="">
      </div>
      <div class="article">
        <h1>标题</h1>
        <p>
          登录页面的主要思路有很多，这里提供两个先第一是我目前项目里面老人写的，
          逻辑是在每次请求时先对后端返回的状态码做判断，如果是无权限或者失效状态
        </p>
      </div>
      <div class="feature">
        <span @click="like"
              :class="{active:boolLike}">&#xe619;</span>
        <span @click="collection"
              :class="{active:boolCollection}">&#xe648;</span>
        <span @click="comment"
              :class="{active:boolComment}">&#xe63d;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      boolLike: false,
      boolCollection: false,
      boolComment: false,
    }
  },
  methods: {
    toDetails () {
      this.$router.push('/details');
    },
    like () {
      console.log('like')
      this.boolLike = !this.boolLike;
    },
    collection () {
      console.log('collection')
      this.boolCollection = !this.boolCollection;

    },
    comment () {
      console.log('comment')
      this.boolComment = !this.boolComment;
    },
  },
}
</script>

<style scoped>
.container {
  height: 68px;
  width: 533px;
  margin: 0 auto;
  display: flex;
  margin-bottom: 8px;
}
.imge {
  width: 121px;
  background-color: antiquewhite;
}
.article {
  flex: 4;
  margin-left: 10px;
  padding: 7px;
  background-color: rgba(255, 255, 255, 0.742);
}
p {
  width: 408px;
  white-space: nowrap;
  font-size: 8px;
  padding-top: 8px;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>