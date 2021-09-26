<template>
  <div id="backStageNavBar">
    <i class="el-icon-menu icon"
       @click="changeNavStatus"></i>
    <el-menu default-active='1'
             class="el-menu-vertical-demo"
             :collapse="isCollapse">
      <el-menu-item index="1"
                    class="nav"
                    @click="backStageArticle">
        <i class="el-icon-menu"></i>
        <span slot="title">博客管理</span>
      </el-menu-item>
      <el-menu-item index="2"
                    class="nav"
                    @click="backStageCommentItems">
        <i class="el-icon-document"></i>
        <span slot="title">评论管理</span>
      </el-menu-item>
      <el-menu-item index="3"
                    class="nav"
                    @click="backStageUserItems">
        <i class="el-icon-setting"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-menu-item index="4"
                    class="nav"
                    @click="backStageNotice">
        <i class="el-icon-setting"></i>
        <span slot="title">公告管理</span>
      </el-menu-item>
      <!-- <el-menu-item index="/backstagemanagement/backstagenotice"
              class="nav">
        <i class="el-icon-setting"></i>
        <span slot="title">公告管理</span>
      </el-menu-item> -->
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
    },
    backStageArticle () {
      this.$router.push('backstagearticle')
    },
    backStageCommentItems () {
      console.log('666')
      this.$router.push('backstagecomments')
    },
    backStageUserItems () {
      console.log('666')
      this.$router.push('backstageuseritems')
    },
    backStageNotice () {
      console.log('666')
      this.$router.push('backstagenotice')
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