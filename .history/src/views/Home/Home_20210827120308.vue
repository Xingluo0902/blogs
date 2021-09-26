<template>
  <div id="home">
    <nav-bar></nav-bar>
    <swiper></swiper>
    <articles></articles>
    <el-dialog :visible.sync="dialogVisible"
               width="30%"
               append-to-body>
      <h1>公告</h1>
      <span>这是一段信息这是一段信息这是一段信息这是一段信息
        这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息
        这是一段信息</span>
    </el-dialog>
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
      notice: null,
    }
  },
  components: {
    Swiper,
    Articles,
    NavBar
  },
  created () {
    // getLatestNotice().then(res => {
    //   console.log(res)
    //   this.notice = res.data;
    // }).catch(err => {
    //   console.log(err);
    // })
  },
  mounted () {
    this.dialogVisible = true;
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