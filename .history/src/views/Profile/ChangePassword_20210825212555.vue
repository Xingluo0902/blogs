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
               plain
               class="btn"
               @click="onSubmit">确认</el-button>
  </div>
</template>

<script>
import { resetPassword } from '@/netWork/require'
export default {
  name: 'changePassword',
  data () {
    return {
      changeCode: {
        oldCode: "",
        newCode: "",
        reNewCode: "",
        code: ''
      },
      rules: {
        oldCode: [
          {
            validator: (rule, value, callback) => {
              if (value !== this.changeCode.code) {
                callback(new Error('密码错误，请重新输入'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          },
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ],
        newCode: [
          {
            validator: (rule, value, callback) => {
              if (value !== this.changeCode.oldCode) {
                callback(new Error('新密码与旧密码相同，请重新输入'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          },
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ],
        reNewCode: [
          {
            validator: (rule, value, callback) => {
              if (value !== this.changeCode.newCode) {
                callback(new Error('两次密码不一致，请重新输入'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          },
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    onSubmit () {
      this.$refs['changeCode'].validate((valid) => {
        if (!valid) return false;
        resetPassword(this.$qs.stringify(this.changeCode)).then(res => {
          console.log(res);
          this.$message({
            message: '修改密码成功，请重新登录！',
            type: 'success'
          });
          this.$router.replace('/login');
        })
      })
    },
  },
}
</script>

<style scoped>
#changePassword {
  width: 433px;
  height: 190px;
  background-color: #fff;
  border-radius: 5px;

  margin: 0 auto;
  margin-top: 28px;
}
.form {
  margin-top: 22px;
  margin-left: 71px;
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
  font-size: 7px;
  color: #909399;
  line-height: 20px;
  text-align: center;
  margin-top: 12px;
  margin-left: 10px;
  cursor: pointer;
}
.back:hover {
  color: rgb(69, 161, 236);
}
.btn {
  margin: 8px 44%;
}
</style>