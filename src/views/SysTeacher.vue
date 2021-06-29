<template>
  <div>
    <el-card>
      <el-table :data="tableData" stripe>
        <el-table-column fixed prop="ID" width="100">
          <template slot="header">
            <el-button size="small" type="primary">新增...</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="user_name" label="姓名" width="120"> </el-table-column>
        <el-table-column prop="workid" label="工号" width="150"> </el-table-column>
        <el-table-column prop="sex" label="性别" width="120"> </el-table-column>
        <el-table-column prop="create_by" label="创建用户" width="120"> </el-table-column>
        <el-table-column prop="create_time" label="创建时间" width="150"> </el-table-column>
        <el-table-column prop="last_update_time" label="最近更新时间" width="150"> </el-table-column>
        <el-table-column fixed="right" width="200">
          <template slot="header">
            <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
          </template>
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
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
export default {}
</script>

<style></style>
