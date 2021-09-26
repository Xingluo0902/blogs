<template>
  <div id="app">
  <login></login>
  </div>
</template>

<style>
    @import 'assets/CSS/base.css';
</style>
<script>
  import Login from './views/Login.vue'
  import Home from 'components/Home'
export default {
  name:'App',
  data(){
    return {

    }
  },
  components:{
    Login
  },
  methods: {
  
  },
}
</script>