<template>
  <div id="articles">
    <div class="container"
         v-for="item in 10"
         :key="item">
      <div class="imge">
        <img src="~assets/imge/wallhaven-q6o81d_1920x1080.png"
             alt="">
      </div>
      <div class="article">
        <p>hahahahaha</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Articles',
  props: {
    articles: {
      type: object
    }
  }
}
</script>

<style scoped>
#articles {
  padding-top: 20px;
  width: 100vw;
}
.container {
  height: 148px;
  width: 78%;
  display: flex;
  margin: 0 auto;
}
.imge {
  flex: 1;
  background-color: skyblue;
}
.imge img {
  width: 100%;
  height: 100%;
}
.article {
  flex: 4;
  background-color: pink;
}
</style>