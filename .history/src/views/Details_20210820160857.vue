<template>
  <div id="details">
    <nav-bar></nav-bar>
    <div class="details">
      <h1>标题</h1>
      <div class="introduction">
        <span>原创</span>
        <span>作者</span>
        <span>time</span>
        <span>版权</span>
      </div>
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
  width: 100vw;
}
.introduction {
  width: 78%;
  background-color: rgb(230, 224, 224);
}
</style>