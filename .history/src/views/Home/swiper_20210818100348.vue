<template>
  <div id="swiper">
    <div class="container">
      <img :src="src.url"
           alt=""
           v-for="(src,index) in srcs"
           :key="index">
      <ul>
        <li></li>
      </ul>
    </div>
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
.container img:nth-child(1) {
  left: 727px;
}
.container img:nth-child(2) {
  left: calc(2 * 727px);
}
.container img:nth-child(3) {
  left: calc(3 * 727px);
}
.container img:nth-child(4) {
  left: calc(4 * 727px);
}
li {
  list-style: disc;
  width: 25px;
  height: 25px;
}
</style>