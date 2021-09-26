<template>
  <div id="swiper">
    <div class="container">
      <img :src="src"
           alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Swiper',
  data () {
    return {
      src: "~assets/imge/wallhaven-n6rpeq_1920x1080.png",
      //srcs: ['../assets/imge/wallhaven-n6rpeq_1920x1080.png', '../assets/imge/wallhaven-pkw6y3_1920x1080.png', '../assets/imge/wallhaven-q6o81d_1920x1080.png', '../assets/imge/wallhaven-zxgeyw_1920x1080.png']
    }
  }
}
</script>

<style scoped>
.container {
  height: 368px;
  width: 500px;
}
img {
  width: 100%;
  height: 100%;
}
</style>