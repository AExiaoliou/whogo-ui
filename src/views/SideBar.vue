<template>
  <aside class="Sider">
    <el-menu class="menu" :collapse="isSideCollapse" router>
      <el-menu-item index="/systeacher">教职工管理</el-menu-item>
      <el-menu-item index="/sysstudent">学生管理</el-menu-item>
      <el-menu-item index="/syscafe">食堂菜品管理</el-menu-item>
      <el-menu-item index="/syscafemember">食堂会员管理</el-menu-item>
      <el-menu-item index="/sysbook">图书管理</el-menu-item>
      <el-menu-item index="/sysbookmember">图书馆会员管理</el-menu-item>
      <el-menu-item index="/user">用户管理</el-menu-item>
      <el-menu-item index="/">通知公告</el-menu-item>
      <el-menu-item index="/">日志记录</el-menu-item>
      <el-menu-item index="/monitor">系统监控</el-menu-item>
      <el-menu-item v-if="testEnv" index="/test">test</el-menu-item>
    </el-menu>
  </aside>
</template>

<script>
export default {
  name: 'side-bar',
  data () {
    return {
      testEnv: process.env.NODE_ENV !== 'production'
    }
  },
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
  overflow-x: hidden;
}
.menu {
  min-height: 400px;
  bottom: 0;
}
@media screen and (max-width: 1000px) {
  .menu {
    position: fixed!important;
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
