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
      <span class="profilePhoto">
        <img src="~assets/imge/1628503067_843837.png"
             alt="">
      </span>
      <span class="creation">创作</span>
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
  margin-left: 112px;
  margin-right: 128px;
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
.profilePhoto {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
</style>