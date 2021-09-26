<template>
  <div id="backStageNavBar">
    <i class="el-icon-menu icon"></i>
    <el-menu default-active="1"
             class="el-menu-vertical-demo"
             :collapse="isCollapse">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
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
  height: 100%;
}
.icon {
  position: relative;
  z-index: 10;
  font-size: 10px;
  font-weight: 560;
  padding-left: 10px;
  margin-top: -5px;
}
</style>