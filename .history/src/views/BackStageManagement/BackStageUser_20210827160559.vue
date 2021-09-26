<template>
  <div>
    <back-stage-user-items v-for="(userInfo,index) in userInfos"
                           :key="index"
                           :userInfo='userInfo'></back-stage-user-items>
  </div>
</template>

<script>
import BackStageUserItems from '@/views/backStageManagement/BackStageUserItems'
import { getAllUser } from '@/netWork/require'
export default {
  name: 'BackStageUser',
  data () {
    return {
      userInfos: [{}]
    }
  },
  created () {
    getAllUser().then(res => {
      console.log(res);
      this.userInfos = res.data;
    });
  },
  components: {
    BackStageUserItems

  },
}
</script>

<style lang="scss" scoped>
</style>