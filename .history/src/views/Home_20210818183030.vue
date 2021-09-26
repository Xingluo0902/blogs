<template>
  <div id="home">

    <articles></articles>
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