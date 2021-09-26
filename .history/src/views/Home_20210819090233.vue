<template>
  <div id="home">
    <swiper></swiper>
    <articles></articles>
  </div>
</template>

<script>
import Swiper from '@/views/Home/Swiper'
import Articles from './Home/Articles.vue'
import { loadArticles } from '@/netWork/require'
export default {
  name: 'Home',
  data () {
    return {
      article: '',
      swiperImg: '',
    }
  },
  components: {
    Swiper,
    Articles,
  },
  created () {
    loadArticles().then(res => {
      console.log(res);
      this.article = res.data;

    }).catch(err => {
      console.log(err)
    });

  },
  methods: {

  }
}
</script>

<style scoped>
</style>