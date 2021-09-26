<template>
  <div id="navBar">
    <div class="nav">
      <span class="logo">
        <img src="~assets/imge/1628503067_843837.png"
             alt="">
      </span>
      <span class="blog"
            @click="routerHome">博客首页</span>

      <div class="search">
        <input type="text"
               placeholder="请输入搜索内容">
        <div></div>

      </div>
      <span></span>
      <span class="profilePhoto"
            @click="toProfile">
        <img src="~assets/imge/wallhaven-q6o81d_1920x1080.png"
             alt="">
      </span>
      <span class="creation">创作中心</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    routerHome () {
      this.$router.push('/home')
    },
    toProfile () {
      this.$router.push('/profile')
    }
  },
}
</script>

<style scoped>
#navBar {
  width: 100vw;
  background-color: #fff;
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
  margin-left: 172px;
  margin-right: 158px;
  margin-top: 10px;
}
.search input {
  padding-left: 10px;
  outline: none;
  border: solid 1px rgb(228, 226, 226, 0.8);
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.1);
  background-color: rgb(238, 238, 238, 0.4);
  width: 350px;
  height: 30px;
  border-radius: 20px;
}
.search input:focus {
  border: solid 1px #2980b9;
  box-shadow: none;
}
.blog,
.creation {
  height: 100%;
  line-height: 50px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
}
.blog {
  padding: 7px 15px;
  margin-left: -84px;
}
.creation {
  margin-left: 66px;
}
.blog:hover {
  background-color: rgb(238, 238, 238, 0.8);
  border-bottom: 2px solid #2980b9;
}
.profilePhoto {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
}
.profilePhoto:hover {
  transform: scale(1.3);
  margin-top: 20px;
  transition: all 0.3s;
}
</style>