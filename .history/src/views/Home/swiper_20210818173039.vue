<template>
  <div class="block">
    <el-carousel trigger="click">
      <el-carousel-item v-for="item in 4"
                        :key="item"
                        class="container">
        <img :src="src.url"
             alt=""
             v-for="(src,index) in srcs"
             :key="index">
      </el-carousel-item>
    </el-carousel>
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
  },
  created () {

  },
  mounted () {

  },
  methods: {

  },
}
</script>

<style scoped>
.container {
  width: 727px;
  height: 528px;
}
img {
  width: 100%;
  height: 100%;
}
</style>