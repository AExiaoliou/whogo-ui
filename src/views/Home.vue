<template>
  <div>
    <nav-bar></nav-bar>
    <div class="top-mask side-content">
      <side-bar></side-bar>
      <main class="page page-mask">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import NavBar from '@/views/NavBar.vue'
import SideBar from '@/views/SideBar.vue'
export default {
  components: { NavBar, SideBar }
}
</script>

<style>
.top-mask {
  position: fixed;
  top: 64px;
}
.side-content {
  display: flex;
  justify-content: flex-start;
  left: 0;
  right: 0;
  bottom: 0;
}
.page {
  padding: 2em 2rem;
}
.page-mask {
  background: rgba(0, 0, 0, 0.05);
  flex: 1;
}

.el-menu-item {
  border-bottom: solid 1px #e6e6e6;
}

.chart {
  margin: auto;
}
</style>
