<template>
  <div id="backStageNavBar">
    <el-menu default-active="1"
             :collapse="isCollapse"
             class="menu">
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
</style>