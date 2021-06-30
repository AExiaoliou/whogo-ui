<template>
  <div>
    <!-- 表格主体 -->
    <el-card>
      <el-table :data="tableData" stripe>
        <el-table-column fixed prop="id" width="100">
          <template slot="header">
            <el-button @click="createPrepare" size="small" type="primary">新增...</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="书名" width="120"> </el-table-column>
        <el-table-column prop="count" label="数量" width="120"> </el-table-column>
        <el-table-column prop="isbn" label="ISBN" width="250"></el-table-column>
        <el-table-column prop="create_by" label="创建用户" width="120"></el-table-column>
        <el-table-column prop="create_time" label="创建时间" width="150"> </el-table-column>
        <el-table-column prop="last_update_time" label="最近更新时间" width="150"> </el-table-column>
        <el-table-column fixed="right" width="150" align="right">
          <template slot="header">
            <el-input size="mini" placeholder="输入关键字搜索" />
          </template>
          <template slot-scope="scope">
            <el-button @click="updatePrepare(scope.row)" type="primary" size="small">编辑</el-button>
            <el-button @click="delete_(scope.row)" type="danger" size="small">删除</el-button>
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
          <el-input v-model="submitForm.count"> </el-input>
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
      :pager-count="pagination.pageCount"
      layout="prev, pager, next"
      :current-page="pagination.current">
    </el-pagination>
  </div>
</template>

<script>
import config from '@/config'
export default {
  data () {
    return {
      data: null,
      tableData: [],
      pagination: {
        pageSize: 5,
        pageCount: 2,
        total: 1,
        current: 1
      },
      submitForm: {
        id: 0,
        name: '',
        isbn: '',
        count: 0,
        create_by: '',
        create_time: '',
        last_update_by: '',
        last_update_time: ''
      },
      pageForm: config.defaultPage,
      isOpenForm: false,
      formType: 'create'
    }
  },
  created () {
    this.updateData()
  },
  methods: {
    updateData () {
      // Loading
      const loading = this.$loading({
        target: document.getElementById('page'),
        lock: true,
        text: '加载中',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      // fetch data
      this.$api.book.findPage(this.pageForm).then((res) => {
        this.data = res.data
        this.tableData = this.data.content
        this.pagination = {
          pageSize: this.data.pageSize,
          pageCount: this.data.totalPages,
          total: this.data.totalSize,
          current: this.data.pageNum
        }
      })
      // close Loading
      loading.close()
    },
    changePage (page) {
      this.pageForm.pageNum += 1
      this.updateData()
    },
    // CRUD buuton prepare
    createPrepare () {
      this.resetForm()
      this.type = 'create'
      let createId = this.pagination.total + 1
      this.submitForm.id = createId
      this.setCreator()
      this.openForm()
    },
    updatePrepare (id) {
      this.resetForm()
      this.type = 'update'
      this.submitForm.id = id
      this.submitForm = this.tableData[id]
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
      let promise = this.$api.book.save(this.submitForm)
      this.handlePromiseData(promise)
    },
    delete_ (id) {
      id += 1
      let promise = this.$api.book.deleteBook(this.tableData[id])
      this.handlePromiseData(promise)
    },
    update () {
      this.create()
    },
    // tools
    resetForm () {
      let submitFormEmpty = {
        id: 0,
        name: '',
        isbn: '',
        count: 0,
        create_by: '',
        create_time: '',
        last_update_by: '',
        last_update_time: ''
      }
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
    setCreator () {
      this.submitForm.create_by = sessionStorage.getItem('user')
      this.submitForm.create_time = new Date().toISOString()
      this.setLastUpdate()
    },
    setLastUpdate () {
      this.submitForm.last_update_by = sessionStorage.getItem('user')
      this.submitForm.last_update_time = new Date().toISOString()
    },
    closeForm () {
      this.isOpenForm = false
    },
    openForm () {
      this.isOpenForm = true
    },
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
