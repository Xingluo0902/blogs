<template>
  <div id="home">
    <swiper></swiper>
    <article></article>
  </div>
</template>

<script>
import Swiper from '@/views/Home/Swiper'
import Article from './Home/Article.vue'
export default {
  name: 'Home',
  data () {
    return {

    }
  },
  components: {
    Swiper,
    Article,
  },
  methods: {

  }
}
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
}
</style>