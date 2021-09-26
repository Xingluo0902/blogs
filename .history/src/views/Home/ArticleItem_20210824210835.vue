<template>
  <div id="articleItem">
    <div class="container"
         @click="toDetails">
      <div class="imge">
        <img src="~assets/imge/wallhaven-q6o81d_1920x1080.png"
             alt="">
      </div>
      <div class="article">
        <h1>
          <slot name="title"></slot>
        </h1>
        <p>
          <slot name="content"></slot>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      boolLike: false,
      boolCollection: false,
      boolComment: false,
    }
  },
  methods: {
    toDetails () {
      this.$router.push('/details');
    },
  },
}
</script>

<style scoped>
.container {
  height: 68px;
  width: 533px;
  margin: 0 auto;
  display: flex;
  margin-bottom: 8px;
}
.imge {
  width: 121px;
  background-color: antiquewhite;
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
</style>