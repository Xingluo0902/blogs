<template>
  <div id="home">
    <el-dialog :visible.sync="dialogVisible"
               width="30%"
               append-to-body
               class="dialog">
      <h1>公告</h1>
      <h2>{{notice.noticeTitle}}</h2>
      <p>{{notice.noticeContent}}</p>
      <p class="dateTime">{{notice.dateTime}}</p>
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
import { getLatestNotice } from '@/netWork/require'

export default {
  name: 'Home',
  data () {
    return {
      articles: null,
      swiperImg: '',
      dialogVisible: false,
      notice: {},
      f: true,
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
      console.log(this.notice);
    }).catch(err => {
      console.log(err);
    })
  },
  mounted () {
    if (this.$route.path.indexOf('home') !== -1) {
      this.dialogVisible = !this.dialogVisible;
    }
    setTimeout(function () {
      this.dialogVisible = !this.dialogVisible;
    }, 5000)
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
h1 {
  padding-bottom: 4px;
  border-bottom: 1px solid rgb(216, 210, 210, 0.5);
}
h2 {
  text-align: center;
}
p {
  padding-top: 4px;
}
.dateTime {
  text-align: end;
}
</style>