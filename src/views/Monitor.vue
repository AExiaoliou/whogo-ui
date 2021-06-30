<template>
  <div class="flexbox-col">
    <el-card>
      <div slot="header">JVM基本信息</div>
      <div class="el-table el-table--enable-row-hover el-table--medium">
        <table cellspacing="0" style="width: 100%;">
          <tbody>
            <tr>
              <td><div class="cell">Java名称</div></td>
              <td>
                <div class="cell" v-if="jvm">{{ jvm.name }}</div>
              </td>
              <td><div class="cell">Java版本</div></td>
              <td>
                <div class="cell" v-if="jvm">{{ jvm.version }}</div>
              </td>
            </tr>
            <tr>
              <td><div class="cell">启动时间</div></td>
              <td>
                <div class="cell" v-if="jvm">{{ jvm.startTime }}</div>
              </td>
              <td><div class="cell">运行时长</div></td>
              <td>
                <div class="cell" v-if="jvm">{{ jvm.runTime }}</div>
              </td>
            </tr>
            <tr>
              <td colspan="1"><div class="cell">安装路径</div></td>
              <td colspan="3">
                <div class="cell" v-if="jvm">{{ jvm.home }}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </el-card>
    <div class="block" />
    <div class="flexbox-row">
      <el-card style="flex: 1">
        <div solt="header">
          内存监控
        </div>
        <memory-board />
      </el-card>
      <div class="block" />
      <el-card style="flex: 1">
        <div solt="header">
          CPU监控
        </div>
        <cpu-board />
      </el-card>
    </div>
  </div>
</template>

<script>
import CpuBoard from './dashboard/CpuBoard.vue'
import MemoryBoard from './dashboard/MemoryBoard.vue'
export default {
  components: {
    MemoryBoard,
    CpuBoard
  },
  data () {
    return {
      jvm: null
    }
  },
  created () {
    const loading = this.$loading({
      target: document.getElementById('page'),
      lock: true,
      text: '加载中',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    })
    this.$api.monitor.getSystem().then(res => {
      this.jvm = res.data.jvm
    })
    loading.close()
  }
}
</script>

<style scoped>

</style>
