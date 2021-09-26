<template>
  <div id="person">
    <nav-bar></nav-bar>
    <div class="file">
      <span>
        <img src="~assets/imge/wallhaven-q6o81d_1920x1080.png"
             alt="">
      </span>
      <span>yonghuming</span>

      <span><img src="~assets/imge/icon.svg"
             alt=""></span>
    </div>
    <div class="fileNav">
      <span @click="baseInfo">基本信息</span>
      <span @click="settings">账号设置</span>
    </div>
    <ul class="fileDetails">
      <li>
        <span>用户名</span>
        <span>xxxxx</span>
      </li>
      <li>
        <span>用户id</span>
        <span>xxxxxxx</span>
      </li>
      <li>
        <span>邮箱地址</span>
        <span>xxxxxxxxxx</span>
      </li>
    </ul>
  </div>
</template>
<script>
import NavBar from '@/views/NavBar'
export default {
  name: 'Person',
  components: {
    NavBar
  },
  methods: {
    baseInfo () {
      console.log('baseInfo')
    },
    settings () {
      console.log('settings')
    }
  }
}
</script>

<style scoped>
#person {
  height: 100vh;
  background-color: rgb(243, 241, 241);
  padding-top: 43px;
}

.file {
  width: 533px;
  height: 100px;
  display: flex;
  background-color: #fff;
  margin: 0 auto;
  border-radius: 5px;
  align-items: center;
}
.file span:first-child {
  margin-top: -8px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  margin-left: 30px;
}
.file span:nth-child(2) {
  font-size: 10px;
  font-weight: 600;
  margin-left: 10px;
}
.file span:last-child {
  width: 100px;
  height: 80px;
  margin-top: 15px;
  margin-left: 258px;
}
.fileNav {
  margin: 0 auto;
  border-top: 1px solid rgb(0, 0, 0, 0.1);
  height: 30px;
  width: 533px;
  display: flex;
  background-color: #fff;
}
.fileNav span:first-child,
.fileNav span:last-child {
  font-size: 8px;
  padding: 0 30px;
  line-height: 30px;
  cursor: pointer;
}
.fileNav span:first-child:hover,
.fileNav span:last-child:hover {
  background-color: rgb(201, 200, 200);
}
.fileDetails {
  width: 533px;
  background-color: #fff;
  margin-top: 10px;
  border-radius: 5px;
}
.fileDetails li {
  display: flex;
  align-items: center;
  height: 23px;
}
.fileDetails li span {
  line-height: 23px;
  font-size: 7px;
}
.fileDetails li span:first-child {
  text-align: end;
  flex: 1;
}
.fileDetails li span:last-child {
  padding-left: 15px;
  flex: 12;
}
</style>