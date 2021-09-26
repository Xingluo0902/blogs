<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<style>
@import "assets/CSS/base.css";
#app {
  background-image: url("~assets/imge/wallhaven-n6rpeq_1920x1080.png");
}
</style>
<script>
import Home from 'views/Home'
import Register from 'views/Register'
import Login from 'views/Login'
import NavBar from '@/views/NavBar'

export default {
  name: 'App',
  data () {
    return {

    }
  },
  components: {
    Login,
    Register,
    Home,
    NavBar
  },
}
</script>