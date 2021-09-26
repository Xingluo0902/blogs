<template>
  <div id="changePassword">
    <span class="back"
          @click="goBack">返回</span>
    <el-form ref="changeCode"
             :model="changeCode"
             :rules="rules"
             label-width="80px"
             class="form">
      <el-form-item label="旧密码"
                    prop="oldCode"
                    class="input">
        <el-input v-model="changeCode.oldCode"
                  placeholder="请输入密码"
                  type="password"
                  show-password></el-input>
      </el-form-item>
      <el-form-item label="新密码"
                    prop="newCode"
                    class="input">
        <el-input v-model="changeCode.code"
                  placeholder="请输入密码"
                  type="password"
                  show-password></el-input>
      </el-form-item>
      <el-form-item label="新密码"
                    prop="newCode"
                    class="input">
        <el-input v-model="changeCode.recode"
                  placeholder="请输入密码"
                  type="password"
                  show-password></el-input>
      </el-form-item>

    </el-form>
    <el-button type="primary"
               plain>主要按钮</el-button>
  </div>
</template>

<script>
export default {
  name: 'changePassword',
  data () {
    return {
      changeCode: {
        oldCode: "",
        newCode: "",
        reNewCode: "",
      }
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  },
}
</script>

<style scoped>
#changePassword {
  width: 533px;
  height: 200px;
  background-color: #fff;
}
.form {
  width: 533px;
  margin: 0 auto;
  margin-top: 35px;
}
.input {
  font-weight: 500;
  padding-left: 35px;
  width: 180px;
}
.back {
  display: inline-block;
  width: 35px;
  height: 20px;
  font-size: 6px;
  background-color: rgba(243, 146, 89);
  line-height: 20px;
  text-align: center;
  margin-top: 20px;
  margin-left: 100px;
}
.back:hover {
  color: rgb(69, 161, 236);
}
</style>