<template>
  <div id="articles">
    <div class="container"
         v-for="item in 10"
         :key="item">
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
        <div>
          <span>点赞</span>
          <span>浏览</span>
          <span>评论</span>
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
  }
}
</script>

<style scoped>
#articles {
  padding-top: 20px;
  width: 100vw;
}
.container {
  height: 128px;
  width: 78%;
  display: flex;
  margin: 0 auto;
  margin-bottom: 15px;
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
}
p {
  width: 902px;

  white-space: nowrap;
  padding-top: 8px;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>