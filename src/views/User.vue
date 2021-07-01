<template>
  <div>
    <el-card>
      <el-table :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))" stripe>
        <el-table-column fixed prop="id" width="100">
          <!-- 新增 -->
          <template slot="header">
            <el-button @click="createPrepare" size="small" type="primary">新增...</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
        <el-table-column prop="nickName" label="昵称" width="150"> </el-table-column>
        <el-table-column prop="email" label="邮箱" width="120"> </el-table-column>
        <el-table-column prop="mobile" label="手机" width="120"> </el-table-column>
        <el-table-column prop="deptName" label="公司名称" width="120"> </el-table-column>
        <el-table-column prop="roleNames" label="角色" width="150"> </el-table-column>
        <el-table-column fixed="right" width="200">
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
        <el-form-item label="workid">
          <el-input v-model="submitForm.nickName"> </el-input>
        </el-form-item>
        <el-form-item label="email">
          <el-input v-model="submitForm.email"> </el-input>
        </el-form-item>
        <el-form-item label="deptName">
          <el-input v-model="submitForm.deptName"> </el-input>
        </el-form-item>
        <el-form-item label="roleNames">
          <el-input v-model="submitForm.roleNames"> </el-input>
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
      data: {},
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
        id: 1,
        createBy: '',
        createTime: '',
        lastUpdateBy: '',
        lastUpdateTime: '',
        name: '',
        nickName: '',
        avatar: null,
        password: '',
        salt: '',
        email: '',
        mobile: '',
        status: 0,
        deptId: 0,
        delFlag: 0,
        deptName: '',
        roleNames: '',
        userRoles: [
          {
            id: 1,
            createBy: null,
            createTime: null,
            lastUpdateBy: null,
            lastUpdateTime: null,
            userId: 1,
            roleId: 1
          }
        ]
      },
      // 分页请求
      pageForm: config.defaultPage,
      // 是否打开表单
      isOpenForm: false,
      // CRUD 类型
      formType: 'create',
      search: ''
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
      await this.$api.user.findPage(this.pageForm)
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
      this.resetForm()

      this.type = 'create'
      let createId = this.pagination.total + 1
      this.submitForm.id = createId
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
      let promise = this.$api.user.save(this.submitForm)
      this.handlePromiseData(promise)
    },
    delete_ (row) {
      let promise = this.$api.user.batchDelete([row])
      this.handlePromiseData(promise)
    },
    update () {
      this.create()
    },
    // tools
    // 重置表单
    resetForm () {
      let submitFormEmpty = {
        id: 1,
        createBy: '',
        createTime: '',
        lastUpdateBy: '',
        lastUpdateTime: '',
        name: '',
        nickName: '',
        avatar: null,
        password: '',
        salt: '',
        email: '',
        mobile: '',
        status: 0,
        deptId: 0,
        delFlag: 0,
        deptName: '',
        roleNames: '',
        userRoles: [
          {
            id: 1,
            createBy: null,
            createTime: null,
            lastUpdateBy: null,
            lastUpdateTime: null,
            userId: 1,
            roleId: 1
          }
        ]
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

<style></style>
