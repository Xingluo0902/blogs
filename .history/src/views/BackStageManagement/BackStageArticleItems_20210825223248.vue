<template>
  <div id="articleItems">
    <div class="container">
      <div class="imge">
        <img src="~assets/imge/wallhaven-q6o81d_1920x1080.png"
             alt="">
      </div>
      <div class="article">
        <h1>标题</h1>
        <p>
          登录页面的主要思路有很多，这里提供两个先第一是我目前项目里面老人写的，
          逻辑是在每次请求时先对后端返回的状态码做判断，如果是无权限或者失效状态
        </p>
      </div>
      <div class="btn">
        <el-button type="primary"
                   class="audit"
                   @click="audit">{{status}}</el-button>
        <el-button type="danger"
                   class="delete"
                   @click="remove">删除</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { articleAudit, articleRemove } from '@/netWork/require'
export default {
  name: 'ArticleItems',
  data () {
    return {
      status: '未审核'
    }
  },
  methods: {
    audit () {
      this.$confirm('是否确定该博客通过审核?', '提示', {
        distinguishCancelAndClose: true,
        confirmButtonText: '通过',
        cancelButtonText: '未通过',
        type: 'warning'
      }).then(() => {
        this.status = '审核通过'
        this.$message({
          type: 'success',
          message: '审核通过!'
        });
        articleAudit().then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err);
        })
      }).catch((action) => {
        if (action === 'cancel') {
          this.status = '审核未通过'
        } else {
          this.status = '未审核'
        }
        this.$message({
          type: 'warning',
          message: action === 'cancel' ? '审核未通过！' : '已取消审核！'
        });
      });
      console.log('audit');
    },
    remove () {
      this.$confirm('是否确定删除该博客通?', '警告', {
        distinguishCancelAndClose: true,
        confirmButtonText: '删除',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'warning',
          message: '已删除!'
        });
        articleRemove().then(res => {
          console.log(res);
        }).catch(err => {
          console.log(err);
        })
      }).catch(() => {
        this.$message({
          type: 'success',
          message: '已取消删除！'
        });
      });
      console.log('remove');
    }
  },
}
</script>

<style scoped>
.container {
  height: 45px;
  width: 621px;
  margin: 0 auto;
  display: flex;
  margin-bottom: 6px;
  padding-bottom: 6px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.imge {
  flex: 1;
}
.article {
  flex: 4;
  margin-left: 10px;
  padding: 7px;
  background-color: rgba(255, 255, 255, 0.742);
}
p {
  width: 408px;
  white-space: nowrap;
  font-size: 8px;
  padding-top: 8px;
  text-overflow: ellipsis;
  overflow: hidden;
}
.btn {
  flex: 1;
  display: flex;
  align-items: center;
}
.audit,
.delete {
  flex: 1;
  height: 20px;
  margin: 0 6px;
}
</style>