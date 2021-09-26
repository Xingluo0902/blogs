<template>
  <div>
    <ul class="Settings">
      <li>
        <span>密码</span>
        <span>xxxxx</span>
        <span>修改</span>
      </li>
      <li>
        <span>邮箱地址</span>
        <span>xxxxxxxxxx</span>
      </li>
    </ul>
  </div>
</template>
  </div>
</template>

<script>
export default {
  name: 'Setting'
}
</script>

<style scoped>
.Settings {
  width: 533px;
  background-color: #fff;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 5px;
}
.Settings li {
  display: flex;
  align-items: center;
  height: 23px;
}
.Settings li span {
  line-height: 23px;
  font-size: 7px;
}
.Settings li span:first-child {
  text-align: end;
  flex: 1;
}
.Settings li span:nth-child(2) {
  padding-left: 15px;
  flex: 11;
}
.Settings li:first-child span:last-child {
  flex: 1;
  padding-right: 15px;
  color: rgb(70, 162, 238);
  cursor: pointer;
}
</style>