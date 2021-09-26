<template>
  <div id="backStageManagement">
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
      </div>
      <div class="btn">
        <el-button type="primary"
                   class="audit">审核</el-button>
        <el-button type="danger"
                   class="delete">删除</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BackStageManagement'
}
</script>

<style scoped>
.container {
  height: 45px;
  width: 573px;
  margin: 0 auto;
  display: flex;
  margin-bottom: 6px;
  padding-bottom: 6px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.imge {
  width: 73px;
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
.btn {
  flex: 1;
}
</style>