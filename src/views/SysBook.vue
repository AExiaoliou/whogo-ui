<template>
  <div>
    <el-card>
      <el-table :data="tableData" stripe>
        <el-table-column fixed prop="ID" width="75">
          <template slot="header">
            <el-button size="small" type="primary">新增...</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="书名" width="120"> </el-table-column>
        <el-table-column prop="count" label="数量" width="120"> </el-table-column>
        <el-table-column prop="isbn" label="ISBN" width="300"></el-table-column>
        <el-table-column prop="create_by" label="创建用户" width="150"></el-table-column>
        <el-table-column prop="create_time" label="创建时间" width="200"> </el-table-column>
        <el-table-column prop="last_update_time" label="最近更新时间" width="120"> </el-table-column>
        <el-table-column fixed="right" width="150" align="right">
          <template slot="header">
            <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
          </template>
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="primary" size="small">编辑</el-button>
            <el-button type="danger" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <div class="block"></div>
    <el-pagination
      :page-size="20"
      :pager-count="11"
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
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
    this.$api.role.findAll().then(res => { this.tableData = res.data })
    this.$api.role.findAll().then((res) => {
      this.tableData = res.data
    })
  }
}
</script>

<style>
</style>
