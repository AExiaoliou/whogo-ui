<template>
  <aside class="Sider">
    <el-menu class="menu" :collapse="isSideCollapse" router>
      <el-menu-item index="/">用户管理</el-menu-item>
      <el-menu-item index="/">角色管理</el-menu-item>
      <el-menu-item index="/">菜单管理</el-menu-item>
      <el-menu-item index="/">字典管理</el-menu-item>
      <el-menu-item index="/">通知公告</el-menu-item>
      <el-menu-item index="/">日志记录</el-menu-item>
      <el-menu-item index="/monitor">系统监控</el-menu-item>
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
@media screen and (max-width: 800px) {
  .menu {
    position: fixed;
    top: 64px
  }
}
.menu:not(.el-menu--collapse) {
  width: 200px;
}
.menu:is(.el-menu--collapse) {
  width: 0;
}
.menu:is(.el-menu--collapse) > .el-menu-item {
  opacity: 0;
  transition: opacity 2s;
}
</style>
