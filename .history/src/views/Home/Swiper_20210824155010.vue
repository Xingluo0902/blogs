<template>
  <div class="block">
    <el-carousel trigger="click"
                 height="408px"
                 class="swiper"
                 type="card"
                 :interval='3000'>
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
        { url: require('../../assets/imge/wallhaven-l3zmwy_1920x1080.png') },
        { url: require('../../assets/imge/wallhaven-l3zmwy_1920x1080.png') },
        { url: require('../../assets/imge/wallhaven-l3zmwy_1920x1080.png') },
        { url: require('../../assets/imge/wallhaven-l3zmwy_1920x1080.png') },
      ],
    }
  },
  created () {
    swiperImg().then(res => {
      console.log('swiperImg')
      console.log(res)
    }).catch(err => {
      console.log(err)
    });
  }
}
</script>

<style scoped>
.block {
  margin-top: 33px;
}
.swiper {
  margin: 0 auto;
  width: 700px;
  height: 220px;
}
</style>

