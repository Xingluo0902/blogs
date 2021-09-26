<template>
  <div class="container">
    <div class="imge">
      <slot name="img"></slot>
    </div>
    <div class="article">
      <slot name="article"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Article'
}
</script>

<style scoped>
.container {
  height: 238px;
  width: 727px;
  display: flex;
}
.imge {
  flex: 2;
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