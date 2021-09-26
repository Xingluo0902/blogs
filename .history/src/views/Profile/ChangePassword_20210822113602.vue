<template>
  <div id="changePassword">
    <span class="back"
          @click="goBack">返回</span>
    <div class="form">
      <el-form ref="changeCode"
               :model="changeCode"
               :rules="rules"
               label-width="80px">
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
    </div>
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
  width: 433px;
  height: 190px;
  background-color: #fff;
  border-radius: 5px;
  margin-top: 15px;
  margin: 0 auto;
}
.form {
  width: 533px;
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
  margin-top: 5px;
  margin-left: 100px;
}
.back:hover {
  color: rgb(69, 161, 236);
}
</style>