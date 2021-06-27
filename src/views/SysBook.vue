<template>
  <div>
    <el-table :data="tableData" stripe>
      <el-table-column fixed prop="ID" label="ID" width="50"> </el-table-column>
      <el-table-column prop="name" label="书名" width="120"> </el-table-column>
      <el-table-column prop="count" label="数量" width="120"> </el-table-column>
      <el-table-column prop="isbn" label="ISBN" width="300"></el-table-column>
      <el-table-column prop="create_by" label="创建用户" width="150"></el-table-column>
      <el-table-column prop="create_time" label="创建时间" width="200"> </el-table-column>
      <el-table-column prop="last_update_time" label="最近更新时间" width="120"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">新增</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: null
    }
  },
  created () {
    // 随便找的一个api做的测试, 肯定是错的不用管
    this.$api.role.findAll().then(res => { this.tableData = res.data })
  }
}
</script>

<style></style>
