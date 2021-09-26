<template>
  <div>
    <back-stage-user-items></back-stage-user-items>
  </div>
</template>

<script>
import BackStageUserItems from '@/views/backStageManagement/BackStageUserItems'
import { getAllUser } from '@/netWork/require'
export default {
  name: 'BackStageUser',
  data () {
    return {
      userInfo: []
    }
  },
  created () {
    // getAllUser().then(res => {
    //   console.log(res);
    //   this.userInfo =res.data;
    // });
  },
  components: {
    BackStageUserItems

  },
}
</script>

<style lang="scss" scoped>
</style>