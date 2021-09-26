<template>
  <div class="block">
    <el-carousel trigger="click">
      <el-carousel-item v-for="(src,index) in srcs"
                        :key="index">
        <img :src="src.url"
             alt="">
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
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.block {
  height: 308px;
  width: 727px;
  margin: 0 auto;
  margin-top: 50px;
}
img {
  width: 100%;
  height: 100%;
}
</style>

