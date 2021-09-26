<template>
  <div id="backStageNavBar">
    <i class="el-icon-menu icon"
       @click="changeNavStatus"></i>
    <el-menu default-active="backstagearticleitems"
             class="el-menu-vertical-demo"
             :collapse="isCollapse"
             router='true'>
      <el-menu-item index="backstagearticleitems"
                    class="nav">
        <i class="el-icon-menu"></i>
        <span slot="title">博客管理</span>
      </el-menu-item>
      <el-menu-item index="backstagecommentitems"
                    class="nav">
        <i class="el-icon-document"></i>
        <span slot="title">评论管理</span>
      </el-menu-item>
      <el-menu-item index="3"
                    class="nav">
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
      activeIndex: '1'
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
  height: 38px;
  line-height: 38px;
  font-size: 8px;
  font-weight: 550;
}
</style>