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
        <el-main>
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
  padding-left: 33px;
  padding-top: 5px;
}
.container {
  height: 45px;
  width: 593px;
  margin: 0 auto;
  display: flex;
  margin-bottom: 6px;
  padding-bottom: 6px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.imge {
  width: 73px;
  background-color: antiquewhite;
}
.article {
  flex: 4;
  margin-left: 10px;
  padding: 7px;
  background-color: rgba(255, 255, 255, 0.742);
}
p {
  width: 408px;
  white-space: nowrap;
  font-size: 8px;
  padding-top: 8px;
  text-overflow: ellipsis;
  overflow: hidden;
}
.btn {
  flex: 1;
  display: flex;
  align-items: center;
}
.audit,
.delete {
  flex: 1;
  height: 20px;
  margin: 0 6px;
}
</style>