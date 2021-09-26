<template>
  <div id="app">
    <el-dialog :visible.sync="dialogVisible"
               width="30%"
               append-to-body
               class="dialog">
      <h1>公告</h1>
      <h2>{{notice.noticeTitle}}</h2>
      <p>{{notice.noticeContent}}</p>
      <p class="dateTime">{{notice.datetime}}</p>
    </el-dialog>
    <router-view></router-view>
  </div>
</template>

<style>
@import "assets/CSS/base.css";
</style>
<style scoped>
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
<script>
import Home from '@/views/Home/Home'
import Register from '@/views/login-register/Register'
import Login from '@/views/login-register/Login'
import { getLatestNotice } from '@/netWork/require'
export default {
  name: 'App',
  data () {
    return {
      notice: {},
      dialogVisible: false
    }
  },
  components: {
    Login,
    Register,
    Home,
  },
  created () {
    getLatestNotice().then(res => {
      console.log(res);
      this.notice = res.data;
      this.notice = res.data;
    }).catch(err => {
      console.log(err);
    })
  },
  mounted () {
    this.dialogVisible = true;

  }
}
</script>