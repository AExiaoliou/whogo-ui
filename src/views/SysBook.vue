<template>
  <div>
    <!-- 表格主体 -->
    <el-card>
      <el-table :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))" stripe>
        <el-table-column fixed prop="id" width="100">
          <!-- 新增 -->
          <template slot="header">
            <el-button @click="createPrepare" size="small" type="primary">新增...</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="书名" width="120"> </el-table-column>
        <el-table-column prop="count" label="数量" width="120"> </el-table-column>
        <el-table-column prop="isbn" label="ISBN" width="250"></el-table-column>
        <el-table-column prop="createBy" label="创建用户" width="120"></el-table-column>
        <el-table-column prop="createTime" label="创建时间" width="150"> </el-table-column>
        <el-table-column prop="lastUpdateTime" label="最近更新时间" width="150"> </el-table-column>
        <el-table-column fixed="right" width="150" align="right">
          <template slot="header">
            <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
          </template>
          <!-- 编辑删除 -->
          <template slot-scope="scope">
            <el-button @click="updatePrepare(scope.row)" type="primary" size="small">编辑</el-button>
            <el-popconfirm title="确定删除这段内容吗?" @confirm="delete_(scope.row)">
              <el-button slot="reference" type="danger" size="small">删除</el-button>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 表单对话框 -->
    <el-dialog :visible.sync="isOpenForm" append-to-body="true">
      <el-form :model="submitForm" ref="submitForm">
        <el-form-item label="name">
          <el-input v-model="submitForm.name"> </el-input>
        </el-form-item>
        <el-form-item label="isbn">
          <el-input v-model="submitForm.isbn"> </el-input>
        </el-form-item>
        <el-form-item label="count">
          <el-input v-model="submitForm.count" type="number"> </el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isOpenForm = false">取 消</el-button>
        <el-button @click="submitCRUD()" type="primary">提 交</el-button>
      </span>
    </el-dialog>
    <div class="block"></div>
    <!-- 分页 -->
    <el-pagination
      :page-size="pagination.pageSize"
      :page-count="pagination.pageCount"
      layout="prev, pager, next"
      :current-page="pagination.current"
      @current-change="changePage">
    </el-pagination>
  </div>
</template>

<script>
import config from '@/config'
export default {
  data () {
    return {
      // 请求响应
      data: null,
      // 表格数据
      tableData: [],
      // 分页信息
      pagination: {
        pageSize: 5,
        pageCount: 2,
        total: 1,
        current: 1
      },
      // 表单
      submitForm: {
        id: 0,
        name: '',
        isbn: '',
        count: 0,
        createBy: '',
        createTime: '',
        lastUpdateBy: '',
        lastUpdateTime: ''
      },
      // 分页请求
      pageForm: config.defaultPage,
      // 是否打开表单
      isOpenForm: false,
      // CRUD 类型
      formType: 'create'
    }
  },
  created () {
    // 页面创建完成后更新数据
    this.updateData()
  },
  methods: {
    // 更新数据
    async updateData () {
      // Loading
      const loading = this.$loading({
        target: document.getElementById('page'),
        lock: true,
        text: '加载中',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      // fetch data
      await this.$api.book.findPage(this.pageForm)
        .then((res) => {
          this.data = res.data
        })
        .catch(res => {
          this.error(res.message)
        })
      // close Loading
      loading.close()
      this.tableData = this.data.content

      this.pagination = {
        pageSize: this.data.pageSize,
        pageCount: this.data.totalPages,
        total: this.data.totalSize,
        current: this.data.pageNum
      }
    },
    changePage (page) {
      this.pageForm.pageNum = page
      this.updateData()
    },
    // CRUD buuton prepare
    // 为 create 做准备
    createPrepare () {
      console.log(this.submitForm)
      this.resetForm()

      this.type = 'create'
      this.setCreator()

      this.openForm()
    },
    // 为 update 做准备
    updatePrepare (row) {
      this.resetForm()

      this.type = 'update'
      this.submitForm = row
      this.setLastUpdate()

      this.openForm()
    },
    // 表单复用实际 CURD 类型选择
    submitCRUD () {
      if (this.formType === 'create') this.create()
      else if (this.formType === 'update') this.update()
      else this.closeForm()
    },
    // CRUD
    create () {
      console.log(this.submitForm)
      let promise = this.$api.book.save(this.submitForm)
      this.handlePromiseData(promise)
    },
    delete_ (row) {
      let promise = this.$api.book.batchDelete([row])
      this.handlePromiseData(promise)
    },
    update () {
      this.create()
    },
    // tools
    // 重置表单
    resetForm () {
      let submitFormEmpty = {
        id: 0,
        name: '',
        isbn: '',
        count: 0,
        createBy: '',
        createTime: '',
        lastUpdateBy: '',
        lastUpdateTime: ''
      }
      // console.log(this.submitForm)
      this.submitForm = submitFormEmpty
    },
    // 这个可能要要写到工具里面
    // 处理数据
    handlePromiseData (promise) {
      promise
        .then(res => {
          if (res.msg != null) this.error(res.message)
          else {
            this.closeForm()
            this.updateData()
          }
        })
        .catch(res => {
          this.error(res.message)
        })
    },
    // 为表单设置创建者和时间
    setCreator () {
      this.submitForm.createBy = sessionStorage.getItem('user')
      this.submitForm.createTime = new Date().toISOString()

      this.setLastUpdate()
    },
    // 为表单设置最后更新人和时间
    setLastUpdate () {
      this.submitForm.lastUpdateBy = sessionStorage.getItem('user')
      this.submitForm.lastUpdateTime = new Date().toISOString()
    },
    // 开关表单
    closeForm () {
      this.isOpenForm = false
    },
    openForm () {
      this.isOpenForm = true
    },
    // 错误信息
    error (message) {
      this.$message({
        message: message,
        type: 'error'
      })
    }
  }
}
</script>

<style>
</style>
