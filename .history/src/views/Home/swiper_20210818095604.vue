<template>
  <div id="swiper">
    <div class="container">
      <img :src="src.url"
           alt=""
           v-for="(src,index) in srcs"
           :key="index">
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
  margin: 0 auto;
  height: 468px;
  width: 827px;
}
img {
  width: 100%;
  height: 100%;
}
</style>