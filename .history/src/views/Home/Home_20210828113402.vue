<template>
  <div id="home">
    <el-dialog :visible.sync="dialogVisible"
               width="30%"
               append-to-body
               class="dialog"
               @opened="appendContent">
      <h1>公告</h1>
      <h2 ref="content">{{notice.noticeTitle}}</h2>
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
    console.log(this.$store.state.notice);
    // this.$store.commit('noticeShow');
    // console.log(this.$store.state.notice);
    // this.$store.commit('noticeShow');
    // console.log(this.$store.state.notice);
    // if (!this.$store.state.notice) {
    //   setTimeout(() => {
    //     if (this.$route.path.indexOf('home') !== -1) {
    //       this.dialogVisible = !this.dialogVisible;
    //       this.$store.commit('noticeShow')
    //     }
    //   }, 1000)



  },
  methods: {
    appendContent () {
      this.$refs.content.insertAdjacentHTML('afterend', this.notice.noticeContent)
    }
  },
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
  padding-bottom: 8px;
}

.dateTime {
  text-align: end;
}
</style>