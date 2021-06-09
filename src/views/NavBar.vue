<template>
  <header class="Header">
    <div>侧边栏展开按钮</div>
    <div>Logo</div>
    <div>头像</div>
  </header>
</template>

<script>
export default {
  name: 'nav-bar'
}
</script>

<style scoped>
.Header, .Header-item {
  display: flex;
  align-items: center;
}
</style>
