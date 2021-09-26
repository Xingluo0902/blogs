<template>
  <div id="details">
    <nav-bar></nav-bar>
    <div class="details">
      <h1>标题</h1>
      <div class="introduction">
        <span class="creation">原创</span>
        <span class="writer">作者</span>
        <span class="time">time</span>
        <span class="banquan">版权</span>
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
  height: 78px;
  margin: 0 auto;
  background-color: rgb(250, 246, 246);
  display: flex;
  align-items: center;
}
.introduction span {
}
</style>