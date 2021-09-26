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
.container {
  height: 238px;
  width: 727px;
  display: flex;
  justify-content: center;
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