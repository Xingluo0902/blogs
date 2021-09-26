<template>
  <div id="home">
    <el-dialog :visible.sync="dialogVisible"
               width="30%"
               append-to-body
               class="dialog">
      <h1>公告</h1>
      <h2>{{notice.noticeTitle}}</h2>
      <p>{{notice.noticeContent}}</p>
      <p class="dateTime">{{notice.datetime}}</p>
    </el-dialog>
    <nav-bar></nav-bar>
    <swiper></swiper>
    <articles></articles>
  </div>
</template>

<script>
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
    getLatestNotice().then(res => {
      this.notice = res.data;
      this.notice = res.data;
    }).catch(err => {
      console.log(err);
    })
  },
  mounted () {
    if (this.$route.path.indexOf('home') !== -1) {
      this.dialogVisible = !this.dialogVisible
    }
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