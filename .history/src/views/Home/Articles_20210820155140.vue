<template>
  <div id="articles">
    <div class="container"
         v-for="item in 10"
         :key="item">
      <div class="imge"
           @click="toDetails">
        <img src="~assets/imge/wallhaven-q6o81d_1920x1080.png"
             alt="">
      </div>
      <div class="article"
           @click="toDetails">
        <h1>标题</h1>
        <p>
          登录页面的主要思路有很多，这里提供两个先第一是我目前项目里面老人写的，
          逻辑是在每次请求时先对后端返回的状态码做判断，如果是无权限或者失效状态
        </p>
        <div class="feature">
          <span @click="like"
                :class="{active:boolActive}">&#xe619;</span>
          <span @click="collection"
                :class="{active:boolActive}">&#xe648;</span>
          <span @click="comment"
                :class="{active:boolActive}">&#xe63d;</span>
        </div>
      </div>
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
      boolActive: false
    }
  },
  methods: {
    toDetails () {
      this.$router.push('/details')
    },
    like () {
      console.log('like')
      this.boolActive = !this.boolActive;
    },
    collection () {
      console.log('collection')
      this.boolActive = !this.boolActive;
    },
    comment () {
      console.log('comment')
      this.boolActive = !this.boolActive;
    },
  },
}
</script>

<style scoped>
#articles {
  padding-top: 10px;
  width: 100vw;
  cursor: pointer;
}
.container {
  height: 128px;
  width: 78%;
  display: flex;
  margin: 0 auto;
  margin-bottom: 8px;
}
.imge {
  flex: 1;
}
.imge img {
  width: 100%;
  height: 100%;
}
.article {
  flex: 4;
  margin-left: 10px;
  padding: 7px;
  background-color: rgba(255, 255, 255, 0.4);
}
p {
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
}
</style>