<template>
  <div id="register">
    <div class="container">
      <div class="logo">
        <img src="../assets/imge/1628503067_843837.png"
             alt="">
      </div>
      <el-form ref="form"
               :model="user"
               :rules="rules"
               label-width="80px"
               class="form">
        <el-form-item label="用户名"
                      prop="name"
                      class="input">
          <el-input v-model="user.name"
                    placeholder="请输入帐号"></el-input>
        </el-form-item>
        <el-form-item label="请设置密码"
                      prop="code"
                      class="input">
          <el-input v-model="user.code"
                    placeholder="请设置密码"
                    type="password"></el-input>
        </el-form-item>
        <el-form-item label="请再次输入密码"
                      prop="code"
                      class="input">
          <el-input v-model="user.code"
                    placeholder="请再次输入密码"
                    type="password"></el-input>
        </el-form-item>
        <input type="checkbox">请勾选用户协议
        <el-button type="primary"
                   @click="onSubmit"
                   class="btn">立即注册</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      user: {
        name: '',
        code: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { pattern: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/, message: '请输入正确的邮箱地址', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit () { }
  },
}
</script>

<style scoped>
#register {
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/imge/wallhaven-n6rpeq_1920x1080.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.container {
  position: absolute;
  width: 548px;
  height: 478px;
  background-color: rgba(236, 240, 241, 0.95);
  top: 23%;
  left: 59%;
  display: flex;
  align-items: center;
}
.logo {
  position: absolute;
  left: 130px;
  top: 14px;
  width: 475px;
  height: 72px;
}
img {
  width: 100%;
  height: 100%;
}
.input {
  font-weight: 500;
  padding-left: 35px;
  width: 350px;
}

.btn {
  margin-top: 20px;
  margin-left: 45%;
}
.form {
  width: 100%;
  margin-top: 48px;
}
.el-icon-s-custom {
  margin-left: -46px;
  margin-top: 283px;
  font-size: 14px;
  color: rgba(149, 165, 166, 1);
  cursor: pointer;
}
.el-icon-s-custom:hover {
  color: #409eff;
}
</style>