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
      <div class="container">
        <div class="menu">
          <el-row class="tac">
            <el-col>
              <el-menu default-active="1"
                       class="el-menu-vertical-demo"
                       background-color="#fff"
                       text-color="#000"
                       active-text-color="#409EFF">
                <el-menu-item index="1">
                  <i class="el-icon-time"></i>
                  <span slot="title">最近浏览</span>
                </el-menu-item>
                <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title">我的收藏</span>
                </el-menu-item>
                <el-menu-item index="3">
                  <i class="el-icon-document"></i>
                  <span slot="title">我的作品</span></span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </div>
        <div class="content"></div>
      </div>

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
  height: 120px;
  background-image: url("~assets/imge/csdn.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
  background-color: rgb(34, 46, 60);
  display: flex;
}
.bgc span:nth-child(1) {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-size: 20px;
  color: #99ccff;
  padding: 21px 48px;
}
.bgc span:nth-child(2) {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  left: 50%;
  bottom: -18px;
  cursor: pointer;
}
.bgc span:nth-child(2) img:hover,
.bgc span:nth-child(2):hover {
  transform: scale(1.2);
  bottom: -18px;
  transition: all 0.5s;
}
.tac {
  width: 230px;
  height: 400px;
  border-right: 2px solid rgb(0, 0, 0, 0.1);
}
.container {
  display: flex;
  margin-top: 50px;
}
.menu {
  flex: 1;
}
.content {
  flex: 4;
}
</style>