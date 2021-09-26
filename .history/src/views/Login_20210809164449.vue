<template>
    <div id="login">
       <div class="container">
            <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="用户名">
            <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密 码">
            <el-input v-model="form.name"></el-input>
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
    top: 25%;
    left: 50%;

}
</style>

<script>
export default {
    name:'Login',
    data(){
        return{
                    form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
        }
    },
    methods: {
        
    },
}
</script>