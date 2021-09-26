<template>
  <div id="home">
    <nav-bar></nav-bar>
    <swiper></swiper>
    <articles></articles>
  </div>
</template>

<script>
import Swiper from '@/views/Home/Swiper'
import Articles from '@/views/Home/Articles'
import NavBar from '@/views/navBar/NavBar'
import { judgeCurrentRoute } from '@/utils/utils'
export default {
  name: 'Home',
  data () {
    return {
      articles: null,
      swiperImg: '',
      dialogVisible: false,
      notice: null,
    }
  },
  components: {
    Swiper,
    Articles,
    NavBar
  },
  mounted () {
    console.log(this.$route.path);
  }
}
</script>

<style scoped>
#home {
  background-image: url("~assets/imge/wallhaven-z8odwg_1920x1080.png");
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 10px;
}
</style>