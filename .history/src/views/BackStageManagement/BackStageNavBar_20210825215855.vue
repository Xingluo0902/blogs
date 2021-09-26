<template>
  <div id="backStageNavBar">
    <el-radio-group v-model="isCollapse"
                    style="margin-bottom: 20px;">
      <span @click="changeNavStatus">
        <el-radio-button :label="false">{{status}}</el-radio-button>
      </span>
      <!-- <span @click="changeNavStatus"
            v-show="navStatus">
        <el-radio-button :label="true">收起</el-radio-button>
      </span> -->
    </el-radio-group>
    <el-menu default-active="1-4-1"
             class="el-menu-vertical-demo"
             @open="handleOpen"
             @close="handleClose"
             :collapse="isCollapse">

      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
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
      navStatus: false,
      status: '展开'
    };
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    },
    changeNavStatus () {
      this.navStatus = !this.navStatus;
      console.log(this.navStatus);
    }
  }
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>