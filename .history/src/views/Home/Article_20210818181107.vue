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
</style>