<template>
  <aside class="Sider">
    <el-menu class="menu" :collapse="isSideCollapse" router>
      <el-menu-item index="/dashboard">系统监控</el-menu-item>
      <el-menu-item index="/test">test</el-menu-item>
    </el-menu>
  </aside>
</template>

<script>
export default {
  name: 'side-bar',
  computed: {
    isSideCollapse () {
      return this.$store.state.app.isSideCollapse
    }
  }
}
</script>

<style>
.Sider {
  z-index: 10;
  margin: 0;
  left: 0;
  bottom: 0;
  margin: 0;
  overflow-y: auto;
}
.menu {
  min-height: 400px;
  bottom: 0;
}
.menu:not(.el-menu--collapse) {
  width: 200px;
}
.menu:is(.el-menu--collapse) {
  width: 0;
}
</style>
