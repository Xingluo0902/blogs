<template>
  <div id="login">
    <div class="container">
      <div class="logo">
        <img src="../assets/imge/1628503067_843837.png"
             alt="">
      </div>
      <el-form ref="formLogin"
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
        <el-form-item label="密 码"
                      prop="code"
                      class="input">
          <el-input v-model="user.code"
                    placeholder="请输入密码"
                    type="password"></el-input>
        </el-form-item>
        <el-checkbox v-model="user.checked"
                     class="checkbox">我已阅读并同意《隐私协议》和《用户条款》</el-checkbox>
        <el-button type="primary"
                   @click="onSubmit"
                   class="btn"
                   :disabled="!user.checked">立即登录</el-button>
      </el-form>
      <i class="el-icon-s-custom"
         @click="register"> 立即注册</i>
    </div>
  </div>
</template>

<script>
import { login } from '@/netWork/require'
export default {
  name: 'Login',
  data () {
    return {
      user: {
        name: '',
        code: '',
        checked: false
      },
      loading: false,
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
    onSubmit () {
      this.$refs['formLogin'].validate((valid) => {
        if (!valid) return false
      })
      this.onLogin();
    },
    onLogin () {
      this.loading = true;
      login(this.user).then(res => {
        console.log(res);
        this.$message({
          message: '登陆成功',
          type: 'success'
        })
        this.loading = false;
      }).catch(err => {
        console.log(err);
        this.$message({
          message: '登陆失败，用户名或密码错误！',
          type: 'error'
        })
        this.loading = false;
      })
    },
    register () {
      this.$router.push('/register');
    }
  },
}
</script>

<style scoped>
#login {
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/imge/wallhaven-q6o81d_1920x1080.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.container {
  position: absolute;
  width: 270px;
  height: 180px;
  background-color: rgba(236, 240, 241, 0.95);
  top: 23%;
  left: 59%;
  display: flex;
  align-items: center;
}
.logo {
  position: absolute;
  left: 94px;
  top: 14px;
  width: 245px;
  height: 45px;
}
img {
  width: 100%;
  height: 100%;
}
.input {
  font-weight: 500;
  padding-left: 35px;
  width: 180px;
}

.btn {
  margin-top: 20px;
  margin-left: 45%;
}
.form {
  margin-top: 48px;
}
.el-icon-s-custom {
  margin-left: -46px;
  margin-top: 283px;
  font-size: 8px;
  color: rgba(149, 165, 166, 1);
  cursor: pointer;
}
.el-icon-s-custom:hover {
  color: #409eff;
}
.checkbox {
  padding-left: 46px;
}
</style>