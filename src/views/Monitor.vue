<template>
  <div style="display:flex; flex-direction: row;">
    <el-card style="flex:0.5">
      <div solt="header">
        内存监控
      </div>
      <memory-board />
    </el-card>
    <el-card style="flex:0.5">
      <div solt="header">
        内存监控
      </div>
      <memory-board />
    </el-card>
  </div>
</template>

<script>
import MemoryBoard from './dashboard/MemoryBoard.vue'
export default {
  components: {
    MemoryBoard
  }
}
</script>

<style>
