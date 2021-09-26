<template>
  <div id="navBar">
    <div class="nav">
      <span class="logo">
        <img src="~assets/imge/1628503067_843837.png"
             alt="">
      </span>
      <span class="blog">博客</span>

      <div class="search">
        <input type="text"
               placeholder="请输入搜索内容">
        <div></div>

      </div>
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
  align-items: center;
}
.logo {
  width: 310px;
}
.search {
  margin: 0 30px;
}
.search input {
  padding-left: 10px;
  outline: none;
  width: 350px;
  height: 30px;
  border-radius: 20px;
}
.blog {
  font-size: 18px;
  font-weight: 500;
  margin-left: -84px;
  cursor: pointer;
}
.blog:hover {
  color: #e74c3c;
}
</style>