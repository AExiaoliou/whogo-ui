<template>
  <header class="Header">
    <div class="Header-item">
      <div class="Header-link">
        <i class="el-icon-more"></i>
      </div>
    </div>
    <div class="Header-item" style="flex: auto">
      <a class="Header-link" href="/#" style="margin: auto">Logo</a>
    </div>
    <div class="Header-item">
      <img src="@/assets/face.png" alt="" height="20" width="20" class="avatar-user"/>
    </div>
  </header>
</template>

<script>
export default {
  name: 'nav-bar'
}
</script>

<style scoped>
.Header,
.Header-item {
  display: flex;
  align-items: center;
}
.Header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 32;
  padding: 16px;
  font-size: 14px;
  line-height: 1.5;
  color: black;
  background-color: black;
  box-sizing: border-box;
}
.Header-item {
  margin-right: 16px;
  align-self: stretch;
}
.Header-link {
  font-weight: 600;
  color: white;
  white-space: nowrap;
}
</style>
