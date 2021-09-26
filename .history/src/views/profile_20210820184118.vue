<template>
  <div id="profile">
    <nav-bar></nav-bar>
    <div class="profile">

    </div>
  </div>
</template>

<script>
import NavBar from '@/views/NavBar'
export default {
  name: 'Profile',
  components: {
    NavBar
  }
}
</script>

<style scoped>
.profile {
  margin-top: 50px;
}
</style>