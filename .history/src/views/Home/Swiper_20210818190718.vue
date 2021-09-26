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
  props: {
    swiperImg: {
      type: Array,
      default () {
        return []
      }
    }
  },
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
}
</script>

<style scoped>
.block {
  width: 847px;
  margin-left: 169px;
  margin-top: 50px;
}
img {
  width: 100%;
  height: 100%;
}
</style>

