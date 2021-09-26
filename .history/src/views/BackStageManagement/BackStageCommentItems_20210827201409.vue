<template>
  <div id="backCommentItems">
    <div class="reply">
      <div class="writerReply">
        <span>
          <img src="~assets/imge/wallhaven-q6o81d_1920x1080.png"
               alt="">
        </span>
        <span>
          <strong>{{comment.userId}}：</strong>
          {{comment.content}}</span>
      </div>
      <div class="btn">
        <el-button type="danger"
                   class="delete"
                   @click="remove(comment.commentId)">删除</el-button>
      </div>
    </div>

  </div>
</template>

<script>
import { removeComments } from '@/netWork/require'
export default {
  name: 'BackCommentItems',
  props: {
    comment: {
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
    remove (id) {
      this.$confirm('是否确定删除该评论?', '警告', {
        distinguishCancelAndClose: true,
        confirmButtonText: '删除',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        removeComments({ commentId: id }).then(res => {
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
  },
}
</script>

<style scoped>
#backCommentItems {
  margin-left: 8px;
}
.reply {
  display: flex;
  width: 613px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  height: 42px;
  display: flex;
}
.reply div {
  display: flex;
  padding-left: 8px;
  line-height: 42px;
  align-items: center;
}
.writerReply {
  flex: 10;
}
.writerReply span:first-child {
  width: 31px;
  height: 31px;
  border-radius: 50%;
  overflow: hidden;
}
.writerReply span:nth-child(2) {
  margin-left: 10px;
  font-size: 8px;
}
.writerReply span:last-child {
  margin-left: 12px;
  font-size: 8px;
  cursor: pointer;
}
.btn {
  flex: 1;
  margin-left: 350px;
  flex-direction: row-reverse;
  align-items: center;
}
.delete {
  height: 20px;
}
</style>