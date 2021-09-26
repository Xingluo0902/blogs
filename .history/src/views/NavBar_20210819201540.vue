<template>
  <div id="navBar">
    <div class="nav">
      <span class="logo">
        <img src="~assets/imge/1628503067_843837.png"
             alt="">
      </span>
      <span class="blogs">博客</span>
      <input type="text"
             placeholder="请输入搜索内容">
      <span></span>
      <span>头像</span>
      <span>创作</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>
#navBar {
  width: 100vw;
}
.nav {
  display: flex;
  width: 78%;
  height: 50px;
  margin: 0 auto;

  background-color: rgba(255, 255, 255, 0.82);
}
.logo {
  width: 130px;
}
input {
  outline: none;
}
</style>