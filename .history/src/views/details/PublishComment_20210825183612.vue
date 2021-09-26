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
                 class="publishBtn">发表</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PublishComment',
  data () {
    return {
      textarea: '',
    }
  },
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