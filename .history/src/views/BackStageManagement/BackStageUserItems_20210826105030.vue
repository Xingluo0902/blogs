<template>
  <div id="backStageUserItems">
    <ul class="fileDetails">
      <li>
        <span>头像</span>
        <!-- <span class="photo"></span> -->
        <span>
          <img src="~assets/imge/wallhaven-q6o81d_1920x1080.png"
               alt=""
               class="photo">
        </span>
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
      <li>
        <el-button type="danger">删除</el-button>
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
.photo {
  display: flex;
  align-items: center;
  border-radius: 50%;
  height: 20px;
  width: 20px;
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