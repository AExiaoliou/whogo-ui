<template>
  <aside class="Sider">
    <el-menu class="menu" :collapse="isSideCollapse">
      <el-menu-item>abc</el-menu-item>
      <el-menu-item><router-link to="/test">totest</router-link></el-menu-item>
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
  position: fixed;
  z-index: 10;
  margin: 0;
  top: 64px;
  left: 0;
  bottom: 0;
  margin: 0;
  overflow-y: auto;
}
.menu{
  min-height: 400px;
}
.menu:not(.el-menu--collapse) {
  width: 200px;
}
.menu:is(.el-menu--collapse) {
  /* wait for code now */
}
</style>
