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
  padding-top: 43px;
}

.file {
  width: 533px;
  height: 100px;
  display: flex;
  background-color: #fff;
  margin: 0 auto;
  border-radius: 5px;
  align-items: center;
}
.file span:first-child {
  margin-top: -12px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  margin-left: 30px;
}
.file span:last-child {
  font-size: 10px;
  font-weight: 600;
  margin-left: 8px;
}
</style>