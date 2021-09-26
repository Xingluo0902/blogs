<template>
    <div class="bg">
      <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="活动名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
    </div>
</template>

<style scoped>
.bg{
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
          type: [],
        }
        }
    },
    methods: {
        
    },
}
</script>