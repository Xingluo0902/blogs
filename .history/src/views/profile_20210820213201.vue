<template>
  <div id="profile">
    <nav-bar></nav-bar>
    <div class="profile">
      <div class="bgc">
        <span>用户名</span>
        <span>
          <img src="~assets/imge/wallhaven-q6o81d_1920x1080.png"
               alt="">
        </span>
      </div>
      <el-row class="tac">
        <el-col>
          <el-menu default-active="1"
                   class="el-menu-vertical-demo"
                   background-color="#fff"
                   text-color="#000"
                   active-text-color="#409EFF">
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">最近浏览</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">我的收藏</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-menu"></i>
              <span slot="title">我的作品</span></span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import NavBar from '@/views/NavBar'
export default {
  name: 'Profile',
  methods: {
  },
  components: {
    NavBar
  }
}
</script>

<style scoped>
.profile {
  margin-top: 50px;
}
.bgc {
  position: relative;
  height: 150px;
  background-image: url("~assets/imge/csdn.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
  background-color: rgb(34, 46, 60);
  display: flex;
}
.bgc span:nth-child(1) {
  font-size: 20px;
  color: #ebeef5;
  padding-left: 48px;
}
.bgc span:nth-child(2) {
  width: 75px;
  height: 75px;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  left: 50%;
  bottom: -18px;
  cursor: pointer;
}
.tac {
  width: 230px;
  margin-top: 50px;
  height: 400px;
  border-right: 2px solid rgb(0, 0, 0, 0.1);
}
</style>