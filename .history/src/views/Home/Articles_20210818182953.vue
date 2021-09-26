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
  width: 800px;
  height: 900px;
  background-color: #000;
}
</style>