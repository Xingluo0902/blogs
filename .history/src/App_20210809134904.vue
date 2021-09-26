<template>
  <div id="app">
  <login></login>
  <h1>jashb</h1>
  </div>
</template>

<style>
    @import './assets/CSS/base.css'
  h1{
    color :red;
  }

</style>
<script>
import Login from './views/Login.vue'
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