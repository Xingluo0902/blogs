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
        <!-- <img src="~assets/imge/wallhaven-q6o81d_1920x1080.png"
             alt=""> -->
      </span>
      <span class="creation"
            @click="toCreation">创作中心</span>
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
  width: 160px;
  height: 30px;
  border-radius: 50%;
}
.blog {
  font-size: 5px;
  font-weight: 500;
  width: 35px;
  height: 100%;
  padding: 0 8px;
  line-height: 32px;
}
</style>