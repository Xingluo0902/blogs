<template>
  <div id="creation">
    <nav-bar></nav-bar>
    <div class="creation"></div>
    <div class="content">
      <el-form ref="form"
               :model="form"
               label-width="80px">
        <span class="title">
          <strong>标题</strong>
        </span>
        <el-form-item>
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <span class="time">
          <strong>时间</strong>
        </span>
        <el-form-item>
          <el-col :span="11">
            <el-date-picker type="date"
                            placeholder="选择日期"
                            v-model="form.date1"
                            style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line"
                  :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker placeholder="选择时间"
                            v-model="form.date2"
                            style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-input type="textarea"
                    :autosize="{ minRows: 15}"
                    v-model="form.desc"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import NavBar from '@/views/NavBar'
export default {
  name: 'Creation',
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        type: [],
        desc: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!');
    }
  },
  components: {
    NavBar
  }

}
</script>

<style scoped>
#creation {
  height: 100vh;
  background-image: url("~assets/imge/wallhaven-8ogod1_1920x1080.png");
  background-size: cover;
}
.creation {
  margin: 0 auto;
  margin-top: 50px;
  height: 150px;
}
.content {
  width: 78%;
  margin: 0 auto;
}
.title,
.time {
  display: inline-block;
  width: 30px;
  height: 30px;
  background-color: #fff;
}
</style>