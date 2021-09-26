<template>
  <div id="creation">
    <nav-bar></nav-bar>
    <div class="creation"></div>
  </div>
</template>

<script>
import NavBar from '@/views/NavBar'
export default {
  name: 'Creation',
  components: {
    NavBar
  }
}
</script>

<style scoped>
.creation {
  margin-top: 50px;
}
</style>