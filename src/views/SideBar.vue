<template>
  <aside>
    <el-menu class="Sider" :collapse="isSideCollapse">
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
      console.log('try get state')
      const tmp = this.$store.state.app.isSideCollapse
      console.log(tmp)
      return tmp
    }
  }
}
</script>

<style>
.Sider {
  top: 64px;
  left: 0;
  bottom: 0;
  margin: 0;
}
.Sider:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.Sider:is(.el-menu--collapse) {
  /* wait for code now */
}
</style>
