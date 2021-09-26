<template>
  <div>
    <span>账号设置</span>
    <el-input placeholder="请输入密码"
              v-model="oldCode"
              show-password></el-input>
    <el-input placeholder="请输入密码"
              v-model="newCode"
              show-password></el-input>
    <el-input placeholder="请输入密码"
              v-model="reNewCode"
              show-password></el-input>
    <el-button type="primary"
               plain>主要按钮</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      oldCode: "",
      newCode: "",
      reNewCode: "",
    }
  }
}
</script>

<style lang="scss" scoped>
</style>