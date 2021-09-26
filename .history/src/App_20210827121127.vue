<template>
  <div id="app">
    <el-dialog :visible.sync="dialogVisible"
               width="30%"
               append-to-body
               class="dialog">
      <h1>公告</h1>
      <p>这是一段信息这是一段信息这是一段信息这是一段信息
        这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息
        这是一段信息</p>
    </el-dialog>
    <router-view></router-view>
  </div>
</template>

<style>
@import "assets/CSS/base.css";
</style>
<script>
import { getLatestNotice } from '@/netWork/require'
import Home from '@/views/Home/Home'
import Register from '@/views/login-register/Register'
import Login from '@/views/login-register/Login'

export default {
  name: 'App',
  data () {
    return {
      notice: null,
    }
  },
  components: {
    Login,
    Register,
    Home,
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