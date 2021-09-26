<template>
  <div id="person">
    <nav-bar></nav-bar>
    <div class="file">
      <span>
        <img :src="previewImg"
             alt="">
        <div class="changePhoto"
             @click="$refs.changePhoto.click()">&#xe611;</div>
        <input type="file"
               ref="changePhoto"
               @change="changeProfilePhoto">
      </span>
      <el-dialog title="修改头像"
                 :visible.sync="dialogVisible"
                 append-to-body
                 @opened="onDialogOpen">
        <div class="photo">
          <img :src="previewImg"
               ref="image">
        </div>
        <span slot="footer"
              class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary"
                     @click="upDataPhoto">确 定</el-button>
        </span>
      </el-dialog>
      <span class="profileName">yonghuming</span>
      <span><img src="~assets/imge/icon.svg"
             alt=""></span>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>


import NavBar from '@/views/navBar/NavBar';
import 'cropperjs/dist/cropper.css';
import Cropper from 'cropperjs';
import { updataImg } from '@/netWork/require'
import { getAllComments } from '@/netWork/require'
export default {
  name: 'Person',
  components: {
    NavBar
  },
  data () {
    return {
      dialogVisible: false,
      previewImg: '',
      cropper: null,
    }
  },
  created () {
    getAllComments().then(res => {
      console.log(res);
      this.comments = res.data;
    }).catch(err => {
      console.log(err);
    })
  },
  methods: {
    changeProfilePhoto () {
      this.dialogVisible = true;
      this.previewImg = window.URL.createObjectURL(this.$refs.changePhoto.files[0])
      console.log(window.URL.createObjectURL(this.$refs.changePhoto.files[0]));
    },
    onDialogOpen () {
      const image = this.$refs.image;
      if (this.cropper) {
        this.cropper.replace(this.previewImg);
        return;
      }
      this.cropper = new Cropper(image, {
        aspectRatio: 1,
        background: false
      });
    },
    upDataPhoto () {
      // updataImg(this.$qs.stringify({ previewImg: this.previewImg })).then(res => {
      //   console.log('success');
      // }).catch(err => {
      //   console.log('error');
      // })
      this.cropper.getCroppedCanvas().toBlob(file => {
        //console.log(file);
        // this.previewImg = window.URL.createObjectURL(file)
        // console.log(window.URL.createObjectURL(file));
        // console.log(newPhoto)
        const formData = new FormData();
        formData.append('file1', file);
        updataImg(formData).then(res => {
          console.log(res);
        }).catch(err => {
          console.log(err);
        })
      })
      this.dialogVisible = false;
    }
  },
}
</script>

<style scoped>
#person {
  height: 100vh;
  background-color: rgb(243, 241, 241);
  padding-top: 43px;
}

.file {
  width: 533px;
  height: 100px;
  display: flex;
  background-color: #fff;
  margin: 0 auto;
  border-radius: 5px;
  align-items: center;
}
.file span:first-child {
  position: relative;
  margin-top: -8px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  margin-left: 30px;
}
.changePhoto {
  font-family: "iconfont";
  position: absolute;
  top: 0px;
  left: 0px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: rgb(0, 0, 0, 0.7);
  text-align: center;
  line-height: 45px;
  font-size: 18px;
  font-weight: 600;
  color: rgb(189, 187, 187);
  display: none;
}
.file span:first-child:hover .changePhoto {
  display: block;
}
.profileName {
  font-size: 10px;
  font-weight: 600;
  margin-left: 10px;
}
.file span:last-child {
  width: 100px;
  height: 80px;
  margin-top: 15px;
  margin-left: 258px;
}
.photo img {
  display: block;
  max-height: 206px;
  max-width: 100%;
}
</style>