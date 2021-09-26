<template>
    <div id="login">
       <div class="container">
            <div class="logo">
                <img src="../assets/imge/1628503067_843837.png" alt="">
            </div>
            <el-form ref="form" :model="user" label-width="80px" class="form">
                <el-form-item label="用户名" class="input">
                <el-input v-model="user.name" placeholder="请输入帐号"></el-input>
                </el-form-item>
                <el-form-item label="密 码"  class="input">
                <el-input v-model="user.code" placeholder="请输入密码" type="password"></el-input>
                </el-form-item>
            <el-button type="primary" @click="onSubmit" class="btn">立即登录</el-button>
        </el-form>
        <i class="el-icon-s-custom" @click="register"> 立即注册</i>
       </div> 
        
    </div>
</template>

<style scoped> 
#login{ 
    width: 100vw;         
    height: 100vh;
    background-image: url('../assets/imge/wallhaven-q6o81d_1920x1080.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    
}
.container{
    position: absolute;
    width: 450px;
    height: 370px;
    background-color: rgba(236, 240, 241,0.95);
    top: 23%;
    left: 59%;
    display: flex;
    align-items: center;
}
.logo{
    position: absolute;
    left: 130px;
    top: 14px;
    width: 475px;
    height: 72px;
}
img{
    width: 100%;
    height: 100%;
}
.input{
    font-weight: 500;
    padding-left: 35px;
    width: 350px;
}

.btn{
    margin-top: 20px;
    margin-left: 45%;
}
.form{
    margin-top: 48px; ;
}
.el-icon-s-custom{
    margin-left:-46px;
    margin-top: 283px;
    font-size: 14px;
    color: rgba(149, 165, 166,1.0);
    cursor: pointer;
}
.el-icon-s-custom:hover{
    color: #409EFF;
}
</style>

<script>
export default {
    name:'Login',
    data(){
        return{
            user: {
               name:'',
               code:'',
            }
        }
    },
    methods: {
        onSubmit(){
            const user = this.user;
            require({
                url:'/post',
                method:'POST',
                data:user
            }).then(res => {
                console.log(res)
            }).catch(err => {
                console.log('登录失败')
            })
        },
        register(){
            console.log('register');
        }
    },
}
</script>