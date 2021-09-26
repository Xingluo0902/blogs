<template>
  <div id="home">
    <swiper></swiper>
    <article></article>
  </div>
</template>

<script>
import Swiper from '@/views/Home/Swiper'
import Aticle from './Home/Article.vue'
export default {
  name: 'Home',
  data () {
    return {

    }
  },
  components: {
    Swiper,
    Aticle
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