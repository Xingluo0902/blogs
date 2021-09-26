<template>
  <div id="person">
    <nav-bar></nav-bar>
    <div class="div">
      <div class="file">
        <span>
          <img src="~assets/imge/wallhaven-q6o81d_1920x1080.png"
               alt="">
        </span>
        <span>yonghuming</span>
      </div>
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
  margin-top: 33px;
}
.div {
  height: 100%;
  background-color: antiquewhite;
  margin-top: 80px;
}
.file {
  width: 533px;
  height: 150px;
  display: flex;
  background-color: #fff;
  margin: 0 auto;
  border-radius: 5px;
}
.file span:first-child {
  margin-top: 10px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  overflow: hidden;
}
</style>