<template>
  <div id="home">
    <h1>首页</h1>
    <el-button type="primary"
               plain
               @click="login">登录</el-button>
    <el-button type="info"
               @click="register">注册</el-button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    login () {
      this.$router.push('/login')
    },
    register () {
      this.$router.push('/register')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>