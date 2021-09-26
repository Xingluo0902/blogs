<template>
  <div id="backStageUserItems">
    <ul class="fileDetails">
      <li>
        <span>头像</span>
        <span class="photo"><img src="~assets/imge/wallhaven-q6o81d_1920x1080.png"
               alt=""></span>
      </li>
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
export default {

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
.fileDetails ul li:first-child span:last-child {
  height: 23px;
  width: 23px;
  border-radius: 50%;
  overflow: hidden;
}
</style>