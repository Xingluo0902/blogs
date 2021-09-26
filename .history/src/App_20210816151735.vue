<template>
  <div id="app">
    <home></home>
    <router-view></router-view>
  </div>
</template>

<style>
    @import 'assets/CSS/base.css';
</style>
<script>
  import Home from 'views/Home'
  import Register from 'views/Register'
  import Login from 'views/Login'
import Home from './components/Home.vue'
export default {
  name:'App',
  data(){
    return {

    }
  },
  components:{
    Login,
    Register,
    Home,
  },

    Home  methods:{

  }
}
</script>