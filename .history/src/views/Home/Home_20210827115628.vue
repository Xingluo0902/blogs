<template>
  <div id="home">
    <nav-bar></nav-bar>
    <swiper></swiper>
    <articles></articles>
    <el-dialog title="提示"
               :visible.sync="dialogVisible"
               width="30%"
               :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
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
      dialogVisible: false
    }
  },
  components: {
    Swiper,
    Articles,
    NavBar
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
</style>