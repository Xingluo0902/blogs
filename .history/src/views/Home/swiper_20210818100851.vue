<template>
  <div id="swiper">
    <div class="container">
      <img :src="src.url"
           alt=""
           v-for="(src,index) in srcs"
           :key="index">
    </div>
    <ul>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Swiper',
  data () {
    return {
      srcs: [
        { url: require('../../assets/imge/wallhaven-n6rpeq_1920x1080.png') },

        { url: require('../../assets/imge/wallhaven-pkw6y3_1920x1080.png') },

        { url: require('../../assets/imge/wallhaven-q6o81d_1920x1080.png') },

        { url: require('../../assets/imge/wallhaven-zxgeyw_1920x1080.png') }
      ],
    }
  }
}
</script>

<style scoped>
.container {
  position: relative;
  margin: 0 auto;
  height: 408px;
  width: 727px;
}
img {
  width: 100%;
  height: 100%;
  position: absolute;
}
.container img:nth-child(2) {
  left: calc(1 * 727px);
}
.container img:nth-child(3) {
  left: calc(2 * 727px);
}
.container img:nth-child(4) {
  left: calc(3 * 727px);
}
ul {
  position: absolute;
  top: 0;
  left: 727px;
}
li {
  width: 15px;
  height: 15px;
  background-color: #000;
  border-radius: 50%;
}
</style>