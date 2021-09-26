<template>
    <div id="login">
        <el-form ref="form" :model="form" >
            <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
            </el-form-item>
        </el-form>
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