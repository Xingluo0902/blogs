<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
@import "assets/CSS/base.css";
</style>
<script>
import Home from '@/views/Home/Home'
import Register from '@/views/login-register/Register'
import Login from '@/views/login-register/Login'
export default {
  name: 'App',
  data () {
    return {}
  },
  components: {
    Login,
    Register,
    Home,
  },
}
</script>