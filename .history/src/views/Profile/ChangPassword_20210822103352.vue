<template>
  <div>
    <el-input placeholder="请输入密码"
              v-model="oldCode"
              show-password></el-input>
    <el-input placeholder="请输入密码"
              v-model="newCode"
              show-password></el-input>
    <el-input placeholder="请输入密码"
              v-model="reNewCode"
              show-password></el-input>
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