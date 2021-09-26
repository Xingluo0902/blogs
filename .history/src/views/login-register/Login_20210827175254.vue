<template>
  <div id="login">
    <div class="container">
      <div class="logo">
        <img src="~assets/imge/1628503067_843837.png"
             alt="">
      </div>
      <el-form ref="formLogin"
               :model="user"
               :rules="rules"
               label-width="80px"
               class="form">
        <el-form-item label="用户名"
                      prop="email"
                      class="input">
          <el-input v-model="user.email"
                    placeholder="请输入帐号"
                    name="email"></el-input>
        </el-form-item>
        <el-form-item label="密 码"
                      prop="password"
                      class="input">
          <el-input v-model="user.password"
                    placeholder="请输入密码"
                    type="password"
                    name="password"></el-input>
        </el-form-item>
        <div class="verificationCode">
          <el-form-item label="验证码"
                        prop="captcha"
                        class="VCodeInput">
            <el-input v-model="user.captcha"
                      placeholder="点击图片更换验证码"></el-input>
          </el-form-item>
          <img id="yzm_img"
               :src="verificationCodeURL"
               @click="getVerificationCodeURL" />
        </div>
        <el-button type="primary"
                   @click="onSubmit"
                   class="btn">立即登录</el-button>
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
        email: '',
        password: '',
        captcha: ''
      },
      verificationCodeURL: 'api/user/GetCode?time' + new Date(),
      loading: false,
      rules: {
        email: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { pattern: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/, message: '请输入正确的邮箱地址', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ],
        // captcha: [
        //   { required: true, message: '验证码不能为空', trigger: 'blur' }
        // ],
      }
    }
  },
  methods: {
    getVerificationCodeURL () {
      this.verificationCodeURL = 'api/user/GetCode?time' + new Date()
    },
    onSubmit () {
      this.$refs['formLogin'].validate(valid => {
        if (!valid) return;
        this.loading = true;
        login(this.$qs.stringify(this.user)).then(res => {
          this.$store.state.userData = res.data;
          console.log(this.$store.state.userData);
          // console.log(res)
          this.$message({
            message: '登陆成功',
            type: 'success'
          })
          this.loading = false;
          this.$router.replace('/home')
        }).catch(err => {
          console.log(err);
          this.$message({
            message: '登陆失败，用户名或密码错误！',
            type: 'error'
          })
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
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url("~assets/imge/wallhaven-q6o81d_1920x1080.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.container {
  position: absolute;
  width: 300px;
  height: 230px;
  background-color: rgba(236, 240, 241, 0.95);
  top: 23%;
  left: 30%;
  display: flex;
  align-items: center;
}
.logo {
  position: absolute;
  left: 84px;
  top: 14px;
  width: 245px;
  height: 40px;
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
  margin-top: 14px;
  margin-left: 45%;
}
.form {
  margin-top: 38px;
}
.el-icon-s-custom {
  margin-left: -38px;
  margin-top: 172px;
  font-size: 8px;
  color: rgba(149, 165, 166, 1);
  cursor: pointer;
}
.el-icon-s-custom:hover {
  color: #409eff;
}
.checkbox {
  padding-left: 46px;
  padding-top: 5px;
}
#yzm_img {
  margin-left: 10px;
  height: 25px;
  width: 90px;
}
.verificationCode {
  font-size: 8px;
  display: flex;
}
.VCodeInput {
  padding-left: 35px;
  width: 100px;
}
</style>