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
          登录页面的主要思路有很多，这里提供两个先
          第一是我目前项目里面老人写的，逻辑是在每次请求时先对后端返回的状态码做判断，
          如果是无权限或者失效状态，那就使用window.location.href来跳转到登录页面，
          但是有个问题，就是页面渲染的顺序问题，主页会先渲染然后到请求时才会判断请求结果，
          这个有延迟，login弹出不是先弹出，会先看到主页。这里要看你的项目是否接受这个问题。
        </p>
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