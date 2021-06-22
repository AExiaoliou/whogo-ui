<template>
  <el-card style="marign: auto">
    <div slot="header">
      欢迎
    </div>
    <div v-for="o in 4" :key="o" class="text item">
      {{ o + '. 快写代码' }}
    </div>
  </el-card>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
