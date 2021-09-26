<template>
    <div id="login">
       <div class="container">
           <h1>登录</h1>
            <el-form ref="form" :model="user" label-width="80px">
            <el-form-item label="用户名" class="input">
            <el-input v-model="user.name" placeholder="请输入帐号"></el-input>
            </el-form-item>
            <el-form-item label="密 码"  class="input">
            <el-input v-model="user.code" placeholder="请输入密码" type="password"></el-input>
            </el-form-item>
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
    background-color: rgba(236, 240, 241,0.8);
    top: 23%;
    left: 59%;
    display: flex;
    align-items: center;
}
h1{
    position: absolute;
    left:45%;
    top: 50px;
}
.input{
    padding-left: 35px;
    width: 350px;
   
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
        
    },
}
</script>