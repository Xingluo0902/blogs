<template>
  <div id="home">
    <swiper :swiperImg='swiperImg'></swiper>
    <articles :article='article'>
      <template v-slot:imge>
        <img src="~assets/imge/wallhaven-q6o81d_1920x1080.png"
             alt="">
      </template>
      <template v-slot:article>
        <p>hahahahah</p>
      </template>
    </articles>
  </div>
</template>

<script>
import Swiper from '@/views/Home/Swiper'
import Articles from './Home/Articles.vue'
import { loadArticles, swiperImg } from '@/netWork/require'
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
    swiperImg().then(res => {
      console.log('swiperImg')
      console.log(res)
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