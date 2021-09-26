<template>
  <div>
    <file-bar></file-bar>
    <ul class="fileDetails">
      <li>
        <span>用户名</span>
        <span>{{userInfo.name}}</span>
      </li>
      <li>
        <span>用户id</span>
        <span>{{userInfo.id}}</span>
      </li>
      <li>
        <span>邮箱地址</span>
        <span>{{userInfo.email}}</span>
      </li>
    </ul>
  </div>
</template>

<script>

import FileBar from '@/views/Profile/FileBar'
export default {
  name: 'FileDetails',
  data () {
    return {
      userInfo: {},
    }
  },
  components: { FileBar },
  mounted () {
    this.userInfo = this.$store.state.userData.data;
  }

}
</script>

<style scoped>
.fileDetails {
  width: 533px;
  background-color: #fff;
  margin: 0 auto;
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