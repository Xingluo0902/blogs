<template>
  <div id="backStageUserItems">
    <ul class="fileDetails">
      <li>
        <span>头像</span>
        <!-- <span class="photo"></span> -->
        <span>
          <img src="~assets/imge/wallhaven-q6o81d_1920x1080.png"
               alt=""
               class="photo">
        </span>
      </li>
      <li>
        <span>用户名</span>
        <span>{{userInfo.name}}</span>
      </li>
      <li>
        <span>用户id</span>
        <span>{{userInfo.id}}</span>
      </li>
      <li>
        <span>邮箱地址</span>
        <span>{{userInfo.email}}</span>
      </li>
      <li>
        <el-button type="danger"
                   @click="removeUser(userInfo.userId)">删除</el-button>
      </li>
    </ul>
  </div>
</template>

<script>
import { removeUsers } from '@/netWork/require'
export default {
  name: 'BackStageUserItems',
  props: {
    userInfo: {
      type: Object,
      default () {
        return {}
      }
    },
  },
  data () {
    return {}
  },
  methods: {
    removeUsers (id) {
      this.$confirm('是否确定删除该用户?', '警告', {
        distinguishCancelAndClose: true,
        confirmButtonText: '删除',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        removeUsers({ userId: id }).then(res => {
          console.log(res);
          location.reload();
        }).catch(err => {
          console.log(err);
        })
        this.$message({
          type: 'warning',
          message: '已删除!'
        })
      }).catch(action => {
        if (action === 'cancel') {
          console.log('remove');
          this.$message({
            type: 'success',
            message: '已取消删除！'
          });
        }
      });

    }
  }
}
</script>

<style scoped>
.fileDetails {
  width: 533px;
  background-color: #fff;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 5px;
}
ul {
  padding: 5px 0;
}
.fileDetails li {
  display: flex;
  align-items: center;
  height: 23px;
}
.fileDetails li:last-child {
  justify-content: center;
}
.fileDetails li span {
  line-height: 23px;
  font-size: 7px;
}
.photo {
  display: flex;
  align-items: center;
  border-radius: 50%;
  height: 20px;
  width: 20px;
}
.fileDetails li span:first-child {
  text-align: end;
  flex: 1;
}
.fileDetails li span:last-child {
  padding-left: 15px;
  flex: 12;
}
</style>