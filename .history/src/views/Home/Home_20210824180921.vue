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
import { loadArticles } from '@/netWork/require'
export default {
  name: 'Home',
  data () {
    return {
      article: {},
      swiperImg: '',
    }
  },
  components: {
    Swiper,
    Articles,
    NavBar
  },
  created () {
    loadArticles().then(res => {
      console.log(res);
      this.article = res.data;
    })
  },
  methods: {

  }
}
</script>

<style scoped>
#home {
  background-image: url("~assets/imge/wallhaven-z8odwg_1920x1080.png");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>