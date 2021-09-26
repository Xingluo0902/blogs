<template>
  <div>
    <div class="noticeItem">
      <span class="time">{{notice.dateTime}}</span>
      <h4 ref="content">{{notice.noticeTitle}}</h4>
      <p></p>
      <el-button type="danger"
                 class="btn"
                 @click="removeNotice(notice.noticeId)">删除</el-button>
    </div>
  </div>
</template>
<script>

import { removeNotices } from '@/netWork/require'

export default {
  name: 'BackStageNoticeItems',
  props: {
    notice: {
      type: Object,
      default () {
        return {}
      }
    },
  },
  mounted () {
    this.$refs.content.insertAdjacentHTML('afterend', this.notice.noticeContent)
  },
  methods: {
    removeNotice (id) {
      this.$confirm('是否确定删除该公告?', '警告', {
        distinguishCancelAndClose: true,
        confirmButtonText: '删除',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        removeNotices({ noticeId: id }).then(res => {
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
.noticeItem {
  display: flex;
  height: 32px;
  width: 623px;
  align-items: center;
  font-size: 8px;
  margin-top: 15px;
  margin-left: 14px;
  border-bottom: 1px solid rgb(218, 218, 218, 0.8);
}
.time {
  flex: 2;
  font-weight: 550;
  padding: 0 15px;
  color: rgb(182, 182, 182);
}
h4 {
  flex: 1;
}
p {
  flex: 10;
}
.btn {
  height: 20px;
  width: 41px;
}
</style>