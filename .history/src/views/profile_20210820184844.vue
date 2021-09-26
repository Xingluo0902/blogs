<template>
  <div id="profile">
    <nav-bar></nav-bar>
    <div class="profile">
      <el-row class="tac">
        <el-col>
          <el-menu default-active="2"
                   class="el-menu-vertical-demo"
                   background-color="#545c64"
                   text-color="#fff"
                   active-text-color="#ffd04b">
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
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
</style>