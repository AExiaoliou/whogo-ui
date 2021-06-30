<template>
  <div>
    <nav-bar></nav-bar>
    <div class="top-mask side-content">
      <side-bar></side-bar>
      <main id="page" class="page-mask">
        <div class="page">
          <router-view />
        </div>
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
/* 布局 */
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
  z-index: 11;
  flex: 1;
}
.page-mask {
  padding: 2em 2rem;
  background: rgba(0, 0, 0, 0.05);
  flex: 1;
}

/* 全局 */
.el-menu-item {
  border-bottom: solid 1px #e6e6e6;
}

.chart {
  margin: auto;
}

/* 简单 class2style */
.flexbox {
  display: flex;
}
.flexbox-row {
  display: flex;
  flex-direction: row;
}
.flexbox-col {
  display: flex;
  flex-direction: column;
}
.flexbox-row-re {
  display: flex;
  flex-direction: row-reverse;
}
.flexbox-col-re {
  display: flex;
  flex-direction: column-reverse;
}
.flexbox-center {
  display: flex;
  align-items: center;
}
.mr20 {
  margin-right: 20px;
}
.ml20 {
  margin-left: 20px;
}
.mr10 {
  margin-right: 10px;
}
.ml10 {
  margin-left: 10px;
}
.block {
  height: 20px;
  width: 20px;
}
.block-col {
  height: 20px;
}
.block-row {
  width: 20px;
}
.width-full {
  width: 100%;
}
.text-center {
  text-align: center;
}
.center-bymargin {
  margin: auto;
}
.item-box10 {
  margin: 10px;
}
.item-box20 {
  margin: 10px;
}
.clickable {
  cursor: pointer;
}
</style>
