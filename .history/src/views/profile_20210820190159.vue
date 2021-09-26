<template>
  <div id="profile">
    <nav-bar></nav-bar>
    <div class="profile">
      <div class="bgc">

      </div>
      <el-row class="tac">
        <el-col>
          <el-menu default-active="1"
                   class="el-menu-vertical-demo"
                   background-color="#545c64"
                   text-color="#fff"
                   active-text-color="#ffd04b">
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
  height: 150px;
  background-image: url("~assets/imge/csdn.jpg");
  background-size: 115% 105%;
  background-repeat: no-repeat;
  background-position: center;
}
</style>