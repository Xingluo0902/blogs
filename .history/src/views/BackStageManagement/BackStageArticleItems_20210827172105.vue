<template>
  <div id="articleItems">
    <div class="container">
      <div class="imge">
        <img src="~assets/imge/wallhaven-q6o81d_1920x1080.png"
             alt="">
      </div>
      <div class="article">
        <h1>{{article.title}}</h1>
        <p>
          {{article.content}}
        </p>
      </div>
      <div class="btn">
        <el-button type="primary"
                   class="audit"
                   @click="audit(article.blogsId)">{{status}}</el-button>
        <el-button type="danger"
                   class="delete"
                   @click="remove(article.blogsId)">删除</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { articleAudit, articleRemove } from '@/netWork/require'

export default {
  name: 'ArticleItems',
  props: {
    article: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      status: '未审核',
      acticle: null,
    }
  },
  created () {
    if (this.article.status = 'Y') {
      this.status = '审核通过'
    }
    if (this.article.status = 'N') {
      this.status = '审核未通过'
    }
  },
  methods: {
    audit (id) {
      console.log(id)
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
        // articleAudit(id).then(res => {
        //   console.log(res)
        // }).catch(err => {
        //   console.log(err);
        // })
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
    remove (id) {
      console.log(id);
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
        // articleRemove(id).then(res => {
        //   console.log(res);
        // }).catch(err => {
        //   console.log(err);
        // })
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
  display: flex;
  margin-left: 8px;
  margin-bottom: 6px;
  padding-bottom: 6px;
  border-bottom: 1px solid rgb(218, 218, 218, 0.8);
}
.imge {
  width: 73px;
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