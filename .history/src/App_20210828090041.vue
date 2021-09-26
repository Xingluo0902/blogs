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
    return {
      notice: {},
      dialogVisible: false
    }
  },
  components: {
    Login,
    Register,
    Home,
  },
  created () {
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state))
    })
    if (sessionStorage.getItem("store")) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem("store"))))
    }
  }
}
</script>