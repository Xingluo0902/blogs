<template>
  <div id="article">
    <div class="container">
      <div class="imge">

      </div>
      <div class="article">

      </div>
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
  background-color: #000;
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