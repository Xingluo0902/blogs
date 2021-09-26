<template>
  <div id="person">
    <nav-bar></nav-bar>
    <div class="file">
      <span>
        <img src="~assets/imge/wallhaven-q6o81d_1920x1080.png"
             alt="">
        <div class="changePhoto">&#xe611;</div>
      </span>
      <span>yonghuming</span>

      <span><img src="~assets/imge/icon.svg"
             alt=""></span>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import NavBar from '@/views/NavBar'
export default {
  name: 'Person',
  components: {
    NavBar
  },

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
  margin-top: -8px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  margin-left: 30px;
}
.changePhoto {
  font-family: "iconfont";
  position: absolute;
  top: 65px;
  left: 130px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: rgb(0, 0, 0, 0.6);
  text-align: center;
  line-height: 45px;
  font-size: 18px;
  font-weight: 600;
  color: rgb(189, 187, 187);
}
.file span:nth-child(2) {
  font-size: 10px;
  font-weight: 600;
  margin-left: 10px;
}
.file span:last-child {
  width: 100px;
  height: 80px;
  margin-top: 15px;
  margin-left: 258px;
}
</style>