<template>
    <div id="login">
       <div class="container">
            <div class="logo">
                <img src="../assets/imge/1628503067_843837.png" alt="">
            </div>
            <el-form ref="form" :model="user" label-width="80px">
            <el-form-item label="用户名" class="input">
            <el-input v-model="user.name" placeholder="请输入帐号"></el-input>
            </el-form-item>
            <el-form-item label="密 码"  class="input">
            <el-input v-model="user.code" placeholder="请输入密码" type="password"></el-input>
            </el-form-item>
            <el-button type="primary" @click="onSubmit" class="btn">立即登录</el-button>
        </el-form>
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
    height: 400px;
    background-color: rgba(236, 240, 241,0.95);
    top: 23%;
    left: 59%;
    display: flex;
    align-items: center;
}
.logo{
    width: 200px;
    height: 100px;
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
    margin-left: 45%;
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
            console.log('666')
        }
    },
}
</script>