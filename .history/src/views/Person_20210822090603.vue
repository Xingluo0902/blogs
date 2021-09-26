<template>
  <div id="person">
    <nav-bar></nav-bar>
    <div class="file">
      <span>
        <img src="~assets/imge/wallhaven-q6o81d_1920x1080.png"
             alt="">
      </span>
      <span>yonghuming</span>
    </div>
  </div>
</template>
<script>
import NavBar from '@/views/NavBar'
export default {
  name: 'Person',
  components: {
    NavBar
  },
  methods: {
  }
}
</script>

<style scoped>
#person {
  height: 100vh;
  background-color: rgb(243, 241, 241);
  margin-top: 30px;
}
.file {
  width: 533px;
  height: 150px;
  display: flex;
  background-color: #fff;
}
</style>