<template>
  <div>
    <ul class="Settings">
      <li>
        <span>密码</span>
        <span>xxxxx</span>
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
.Settingsils li {
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
.Settings li span:last-child {
  padding-left: 15px;
  flex: 12;
}
</style>