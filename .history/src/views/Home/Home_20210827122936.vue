<template>
  <div id="home">
    <nav-bar></nav-bar>
    <swiper></swiper>
    <articles></articles>
  </div>
</template>

<script>
import { getAllComments } from '@/netWork/require'
import Swiper from '@/views/Home/Swiper'
import Articles from '@/views/Home/Articles'
import NavBar from '@/views/navBar/NavBar'

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
  created () {
    getAllComments().then(res => {
      console.log(res);
      this.comments = res.data;
    }).catch(err => {
      console.log(err);
    })
  },
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