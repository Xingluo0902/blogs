<template>
  <div id="backStageNavBar">
    <i class="el-icon-menu icon"
       @click="changeNavStatus"></i>
    <el-menu default-active="1"
             class="el-menu-vertical-demo menu"
             :collapse="isCollapse">
      <el-menu-item index="1"
                    class="nav">
        <i class="el-icon-menu"></i>
        <span slot="title">博客管理</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-document"></i>
        <span slot="title">评论管理</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'BackStageNavBar',
  data () {
    return {
      isCollapse: true,
    };
  },
  methods: {
    changeNavStatus () {
      this.isCollapse = !this.isCollapse;
    }
  }
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100px;
}
.backStageNavBar {
  height: 100%;
  position: relative;
}
.icon {
  position: fixed;
  top: 14px;
  left: 0;
  font-size: 10px;
  font-weight: 560;
  padding-left: 10px;
  z-index: 11;
  cursor: pointer;
}
.icon:hover {
  color: #409eff;
}
.nav {
  padding-left: 8px;
  height: 38px;
}
</style>