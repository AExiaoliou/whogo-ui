<template>
  <div>
    <el-table :data="tableData" stripe>
      <el-table-column fixed prop="id" label="ID" width="50"> </el-table-column>
      <el-table-column prop="name" label="菜名" width="120"> </el-table-column>
      <el-table-column prop="price" label="价格" width="120"> </el-table-column>
      <el-table-column prop="create_by" label="创建用户" width="150"> </el-table-column>
      <el-table-column prop="create_time" label="创建时间" width="200"> </el-table-column>
      <el-table-column prop="last_update_by" label="最近更新用户" width="120"> </el-table-column>
      <el-table-column prop="last_update_time" label="最近更新时间" width="120"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
