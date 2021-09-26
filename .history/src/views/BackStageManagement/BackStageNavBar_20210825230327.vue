<template>
  <div id="backStageNavBar">
    <i class="el-icon-menu icon"
       @click="changeNavStatus"></i>
    <el-menu default-active="1"
             class="el-menu-vertical-demo menu"
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
}
</style>