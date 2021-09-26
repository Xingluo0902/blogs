<template>
  <div>
    <div class="fileNav">
      <span @click="baseInfo">基本信息</span>
      <span @click="settings">账号设置</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'fileBar',
  methods: {
    baseInfo () {
      this.$router.push('filedetails');
      console.log('baseInfo')
    },
    settings () {
      this.$router.push('settings');
      console.log('settings')
    }
  }
}
</script>

<style scoped>
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
</style>