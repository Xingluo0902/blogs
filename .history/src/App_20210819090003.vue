<template>
  <div id="app">
    http:''''
    <router-link></router-link>
  </div>
</template>

<style>
@import "assets/CSS/base.css";
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
    Home
  },

  methods: {

  }
}
</script>