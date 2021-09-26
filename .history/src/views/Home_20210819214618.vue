<template>
  <div id="home">
    <swiper></swiper>
    <articles :article='article'></articles>
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
#home {
  background-image: url("~assets/imge/wallhaven-n6rpeq_1920x1080.png");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>