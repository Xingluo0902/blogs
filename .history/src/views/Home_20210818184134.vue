<template>
  <div id="home">
    <swiper></swiper>
    <articles>
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
export default {
  name: 'Home',
  data () {
    return {

    }
  },
  components: {
    Swiper,
    Articles,
  },
  methods: {

  }
}
</script>

<style scoped>
</style>