<template>
  <div style="display:flex; flex-direction: row;">
    <el-card style="flex:1">
      <div solt="header">
        内存监控
      </div>
      <memory-board />
    </el-card>
    <div class="block" />
    <el-card style="flex:1">
      <div solt="header">
        内存监控
      </div>
      <cpu-board />
    </el-card>
  </div>
</template>

<script>
import CpuBoard from './dashboard/CpuBoard.vue'
import MemoryBoard from './dashboard/MemoryBoard.vue'
export default {
  components: {
    MemoryBoard,
    CpuBoard
  }
}
</script>

<style scoped>
.block {
  width: 20px;
}
</style>
