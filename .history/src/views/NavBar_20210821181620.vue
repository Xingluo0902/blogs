<template>
  <div id="navBar">
    <div class="nav">
      <span class="logo">
        <img src="~assets/imge/1628503067_843837.png"
             alt="">
      </span>
      <span class="blog"
            @click="routerHome">首页</span>

      <div class="search">
        <input type="text"
               placeholder="请输入搜索内容...">
        <div></div>
      </div>
      <span class="profilePhoto"
            @click="toProfile">
        <img src="~assets/imge/wallhaven-q6o81d_1920x1080.png"
             alt="">
      </span>
      <div class="statusBar">
        <span class="">用户名</span>
        <span>个人中心</span>
        <span class="">退出</span>
      </div>
      <span class="creation"
            @click="toCreation">
        <span class="icon">&#xe8ca; </span>
        <span style="color: #DCDFE6;font-weight:600"> 创 作</span>
      </span>
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
    },
    toCreation () {
      this.$router.push('/creation')
    }
  },
}
</script>

<style scoped>
#navBar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 750px;
  height: 32px;
  background-color: #fff;
}
.nav {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.logo {
  padding-left: 32px;
  width: 200px;
  height: 30px;
  border-radius: 50%;
}
.blog,
.creation {
  font-size: 8px;
  font-weight: 600;
  width: 35px;
  height: 100%;
  text-align: center;
  padding: 0 5px;
  line-height: 32px;
  cursor: pointer;
  margin-left: -84px;
}
.blog:hover {
  background-color: #e4e7ed;
  border-bottom: 2px solid #409eff;
}
.search input {
  width: 232px;
  height: 16px;
  padding-left: 11px;
  outline: none;
  border: solid 1px rgb(228, 226, 226, 0.8);
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.1);
  background-color: rgb(238, 238, 238, 0.4);
  border-radius: 20px;
  margin-left: 78px;
}
.search input:focus {
  border: solid 1px #2980b9;
  box-shadow: none;
}
.profilePhoto {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-left: 98px;
  overflow: hidden;
  z-index: 11;
  cursor: pointer;
}
.profilePhoto:hover .statusBar {
  display: block;
}
.statusBar {
  position: absolute;
  top: 33px;
  right: 82px;
  z-index: 10;
  width: 90px;
  height: 95px;
  display: flex;
  flex-direction: column;
  font-size: 8px;
  text-align: center;
  background-color: #fff;
  cursor: pointer;
  background-color: #dcdfe6;
}
.statusBar span {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.statusBar span:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.statusBar span:first-child {
  padding-top: 25px;
  flex: 3;
}
.statusBar span:nth-child(2) {
  flex: 3;
}
.statusBar span:last-child {
  flex: 3;
}
.creation {
  font-family: "iconfont";
  width: 35px;
  margin-left: 52px;
  font-weight: 500;
  background-color: #f03939;
  color: #dcdfe6;
  border-radius: 10px;
  height: 20px;
  line-height: 20px;
}
.creation:hover {
  background-color: #f56e6e;
}
.icon {
  font-size: 10px;
  font-weight: 600;
}
</style>



