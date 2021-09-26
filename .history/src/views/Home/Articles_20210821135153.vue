<template>
  <div id="articles">
    <div class="container"
         v-for="item in 10"
         :key="item">
      <div class="imge">
        <!-- <img src="~assets/imge/wallhaven-q6o81d_1920x1080.png"
             alt=""
             @click="toDetails"> -->
      </div>
      <div class="article"
           @click="toDetails">
        <!-- <h1>标题</h1> -->
        <!-- <p>
          登录页面的主要思路有很多，这里提供两个先第一是我目前项目里面老人写的，
          逻辑是在每次请求时先对后端返回的状态码做判断，如果是无权限或者失效状态
        </p> -->
      </div>
      <!-- <div class="feature">
        <span @click="like"
              :class="{active:boolLike}">&#xe619;</span>
        <span @click="collection"
              :class="{active:boolCollection}">&#xe648;</span>
        <span @click="comment"
              :class="{active:boolComment}">&#xe63d;</span>
      </div> -->
    </div>

  </div>
</template>

<script>

export default {
  name: 'Articles',
  props: {
    type: Object,
    default () {
      return {}
    }
  },
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
#articles {
  padding-top: 10px;
  cursor: pointer;
}
.container {
  height: 80px;
  width: 530px;
  margin: 0 auto;
  display: flex;
  margin-bottom: 8px;
}
.imge {
  flex: 1;
  background-color: antiquewhite;
}
.article {
  flex: 4;
  margin-left: 10px;
  padding: 7px;
  background-color: rgba(255, 255, 255, 0.4);
}
/* p {
  width: 902px;
  white-space: nowrap;
  padding-top: 8px;
  text-overflow: ellipsis;
  overflow: hidden;
}
.feature {
  margin-top: 18px;
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
}
.feature span:hover {
  color: #e67e22;
}
.active {
  color: #e67e22;
} */
</style>