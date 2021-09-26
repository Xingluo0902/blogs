<template>
  <div id="articles">
    <div class="container">
      <div class="imge">
        <slot name="imge"></slot>
      </div>
      <div class="article">
        <slot name="article"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Articles'
}
</script>

<style scoped>
#articles {
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