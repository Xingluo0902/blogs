<template>
  <div id="backStageManagement">

    <el-container>
      <el-header>
        <div class="navBar">
          <span class="btn">
            <el-button @click="quit">退出</el-button>
          </span>
        </div>
      </el-header>
      <el-container>
        <el-aside width="auto">
          <back-stage-nav-bar></back-stage-nav-bar>
        </el-aside>
        <el-main style="background:#E9EEF3">
          <back-stage-article-items v-for="item in 10"
                                    :key="item"></back-stage-article-items>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
import BackStageArticleItems from '@/views/backStageManagement/BackStageArticleItems'
import BackStageNavBar from '@/views/backStageManagement/BackStageNavBar'
export default {
  name: 'BackStageManagement',
  components: {
    BackStageArticleItems,
    BackStageNavBar
  },
  methods: {
    quit () {
      console.log('quit');
      this.$router.push('/login')
    }
  },
}
</script>

<style scoped>
#backStageManagement {
  background-color: rgb(243, 241, 241);
}
.navBar {
  position: fixed;
  top: 0;
  left: 0px;
  width: 100vw;
  height: 33px;
  background-color: #fff;
  z-index: 10;
}
.btn {
  display: flex;
  padding-left: 33px;
  padding-top: 15px;
}

/* .btn {
  flex: 1;
  display: flex;
  align-items: center;
} */
</style>