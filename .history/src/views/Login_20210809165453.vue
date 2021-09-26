<template>
    <div id="login">
       <div class="container">
            <el-form ref="form" :model="user" label-width="80px">
            <el-form-item label="用户名" class="input">
            <el-input v-model="form.name" placeholder="请输入帐号"></el-input>
            </el-form-item>
            <el-form-item label="密 码"  class="input">
            <el-input v-model="form.code" placeholder="请输入密码"></el-input>
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
    background-color: rgb(255, 255, 255);
    top: 23%;
    left: 59%;
    display: flex;
    align-items: center;
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