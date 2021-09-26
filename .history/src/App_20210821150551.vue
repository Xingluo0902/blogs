<template>
  <div id="app">

    <router-view></router-view>
  </div>
</template>

<style>
@import "assets/CSS/base.css";

#app {
  background-image: url("~assets/imge/wallhaven-z8odwg_1920x1080.png");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
<script>
import Home from 'views/Home'
import Register from 'views/Register'
import Login from 'views/Login'


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

  },
}
</script>