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
          第一是我目前项目里面老人写的，逻辑是在每次请求时先对后端返回的状态码做判断，如果是无权限或者失效状态，那就使用window.location.href来跳转到登录页面，但是有个问题，就是页面渲染的顺序问题，主页会先渲染然后到请求时才会判断请求结果，这个有延迟，login弹出不是先弹出，会先看到主页。这里要看你的项目是否接受这个问题。
          第二个就是利用路由钩子router.beforeEach()参数有to from next来做，先进入login，在进入之前查sessionStorage或者本地的cookie或者localStorage里面的登录状态（这个是之前登录放在本地的，可能包括用户名和密码和有效期）。如果不需要登录，那就让进入login的router的next里面写入主页的path，这样就是在函数执行完后中断当前路由直接进入next里面的path。这样就进到主页了。如果是没有的话，或者过期了，那么就进入login页面发起axios请求，来创建登录状态了，要用sessionStorage还是localStorage还是cookie，什么时候删除本地的登录状态码，就要看项目了，不推荐使用localStorage，这个需要手动删除，注意最好是手动删除一下。这里的连接用了sessionstorage来做的，这里要把它为空的状态判断到

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
  height: 148px;
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
  height: 58px;

  text-overflow: ellipsis;
  overflow: hidden;
}
</style>