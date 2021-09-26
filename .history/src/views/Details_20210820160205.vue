<template>

  <div id="details">
    <nav-bar></nav-bar>
    <div class="details">
      <h1>标题</h1>

    </div>
  </div>
</template>

<script>
import NavBar from '@/views/NavBar'
export default {
  name: 'Details',
  components: {
    NavBar
  }
}
</script>

<style scoped>
.details {
  margin-top: 50px;
}
</style>