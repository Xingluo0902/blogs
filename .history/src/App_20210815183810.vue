<template>
  <div id="app">
    <login></login>
    <register></register>
  </div>
</template>

<style>
    @import 'assets/CSS/base.css';
</style>
<script>
  import Register from 'views/Register'
  import Login from 'views/Login'
export default {
  name:'App',
  data(){
    return {

    }
  },
  components:{
    Login,
    Register
  },
  methods
    Register: {
  
  },
}
</script>