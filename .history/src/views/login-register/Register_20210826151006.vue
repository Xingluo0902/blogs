<template>
  <div id="register">
    <div class="container">
      <div class="logo">
        <img src="~assets/imge/1628503067_843837.png"
             alt="">
      </div>
      <el-form ref="formRegister"
               :model="user"
               :rules="rules"
               label-width="80px"
               class="form"
               action=''
               methord='post'>
        <el-form-item label="用户名"
                      prop="userName"
                      class="input">
          <el-input v-model="user.userName"
                    placeholder="请输入用户名"></el-input>
        </el-form-item>

        <el-form-item label="邮箱地址"
                      prop="email"
                      class="input">
          <el-input v-model="user.email"
                    placeholder="请输入邮箱地址"></el-input>
        </el-form-item>

        <el-form-item label="设置密码"
                      prop="password"
                      class="input">
          <el-input v-model="user.password"
                    placeholder="请设置密码"
                    type="password"
                    show-password></el-input>
        </el-form-item>

        <el-form-item label="再次输入"
                      prop="recode"
                      class="input">
          <el-input v-model="user.recode"
                    placeholder="请输入激活码"
                    type="password"
                    show-password></el-input>
        </el-form-item>
        <div class="checkCode">
          <el-form-item label="激活码"
                        prop="code"
                        class="VCodeInput">
            <el-input v-model="user.code"
                      placeholder="请输入激活码"></el-input>
            <el-button type="primary"
                       class="getCheckCode"
                       @click='getCheckCode'>点击发送</el-button>
          </el-form-item>
        </div>

        <div class="verificationCode">
          <el-form-item label="验证码"
                        prop="captcha"
                        class="VCodeInput">
            <el-input v-model="user.captcha"
                      placeholder="验证码"></el-input>
          </el-form-item>
          <img id="yzm_img"
               :src="verificationCodeURL"
               @click="getVerificationCodeURL" />
        </div>
        <el-checkbox v-model="user.checked"
                     class="checkbox">我已阅读并同意《隐私协议》和《用户条款》</el-checkbox>
        <el-button type="primary"
                   @click="onSubmit"
                   class="btn"
                   :disabled="!user.checked">立即注册</el-button>
      </el-form>

    </div>
  </div>
</template>

<script>

import { register, sendEmailVerificationCode } from '@/netWork/require'

export default {
  name: 'Register',
  data () {
    return {
      user: {
        userName: '',
        email: '',
        recode: '',
        password: '',
        checked: false,
        captcha: '',
        code: ''
      },
      verificationCodeURL: 'api/user/GetCode?time' + new Date(),
      rules: {
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { pattern: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/, message: '请输入正确的邮箱地址', trigger: 'blur' }
        ],
        userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { max: 16, min: 8, message: '密码长度需在8~16个字符长度之间', trigger: 'blur' }
        ],
        recode: [
          {
            validator: (rule, value, callback) => {
              if (value !== this.user.password) {
                callback(new Error('两次密码不一致，请重新输入'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          },
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ],
        captcha: [
          { required: true, message: '验证码不能为空', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '激活码不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit () {
      let webUser = {
        userName: this.user.userName,
        email: this.user.email,
        password: this.user.password,
        captcha: this.user.captcha,
        code: this.user.code
      }
      this.$refs['formRegister'].validate((valid) => {
        if (!valid) return false;
        console.log(this.$qs.stringify(webUser))
        register(webUser).ther(res => {
          console.log(res);
          this.$message({
            type: 'success',
            message: '注册成功'
          });
          this.$router.replace('/login')
        }).catch(err => {
          this.$message({
            type: 'error',
            message: '注册失败'
          })
        })
      })
    },
    getCheckCode () {
      console.log(this.$qs.stringify(this.user.email));
      // sendEmailVerificationCode(this.$qs.stringify(this.user.email)).then(res => {
      //   console.log(res);
      //   this.$message({
      //     message: '验证码已发送',
      //     type: 'success'
      //   }).catch(err => {
      //     this.$message({
      //       message: '验证码发送失败',
      //       type: 'error'
      //     })
      //   })
      // })
      console.log('getCheckCode')
    },
    getVerificationCodeURL () {
      this.verificationCodeURL = 'api/user/GetCode?time' + new Date()
    },
  },
}
</script>

<style scoped>
#register {
  width: 100vw;
  height: 100vh;
  background-image: url("~assets/imge/wallhaven-n6rpeq_1920x1080.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.container {
  position: absolute;
  width: 308px;
  height: 308px;
  background-color: rgba(236, 240, 241, 0.95);
  top: 10%;
  left: 50%;
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
  position: absolute;
  top: 87%;
  left: 39%;
}
.form {
  width: 100%;
  margin-top: 0px;
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
.checkbox {
  padding-left: 46px;
}
#yzm_img {
  margin-left: 20px;
  height: 25px;
  width: 90px;
}
.verificationCode,
.checkCode {
  position: relative;
  font-size: 8px;
  display: flex;
}
.VCodeInput {
  padding-left: 35px;
  width: 100px;
}
.getCheckCode {
  position: absolute;
  top: 0;
  right: -64px;
}
</style>