<template>
  <div id="comment">
    <div class="comment">
      <el-input type="textarea"
                :autosize="{ minRows: 2}"
                placeholder="优质的评论能够帮助博主获得更高的声誉..."
                v-model="textarea"
                class="textarea">
      </el-input>
      <el-button type="primary"
                 class="publishBtn"
                 @click="punlishMyComent">发表</el-button>
    </div>
  </div>
</template>

<script>
import { publishComments } from '@/netWork/require'
export default {
  name: 'PublishComment',
  props: {
    blogId: {
      type: String,
    },
  },
  data () {
    return {
      textarea: '',
    }
  },
  methods: {
    punlishMyComent () {
      if (this.$store.state.userData === null) {
        this.$message({
          type: 'info',
          message: '您未登录，请先登录！'
        })
        this.$router.push('/login')
      } else {
        let comment = {
          blogId: this.blogId,
          content: this.textarea
        }
        console.log(this.$qs.stringify(comment));
        publishComments(this.$qs.stringify(comment)).then(res => {
        }).catch(err => { })
      }
    }
  }
}
</script>

<style scoped>
.comment {
  width: 533px;
  margin: 0 auto;
  margin-top: 6px;
}
.publishBtn {
  height: 26px;
  margin-left: 8px;
}
.textarea {
  width: 480px;
}
</style>