<template>
  <div class="block">
    <el-carousel trigger="click"
                 height="408px">
      <el-carousel-item v-for="(src,index) in srcs"
                        :key="index">
        <img :src="src.url"
             alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { swiperImg } from '@/netWork/require'
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
    swiperImg().then(res => {
      console.log('swiperImg' + res)
    }).catch(err => {
      console.log(err)
    })
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
  width: 727px;
  margin: 0 auto;
  margin-top: 50px;
  background-color: aqua;
}
img {
  width: 100%;
  height: 100%;
}
</style>

