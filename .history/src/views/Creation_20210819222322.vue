<template>
  <div id="creation">
    <nav-bar></nav-bar>
    <div class="creation">
      <h1>创作中心</h1>
    </div>
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