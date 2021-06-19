<template>
  <div class="Login-form-mask">
    <el-form
      :model="login"
      status-icon
      :rules="rules"
      ref="login"
      :label-position="right"
      label-width="80px"
      class="Login-form"
    >
      <el-form-item label="用户名" prop="username">
        <el-input auto-complete="false" v-model="login.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" auto-complete="false" v-model="login.password"></el-input>
      </el-form-item>
      <div>
        <el-form-item>
          <el-button type="primary" @click="submitForm('login')"
            >登录</el-button
          >
          <el-button @click="resetForm('login')">重置</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    var validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      }
      callback()
    }
    var validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      }
      callback()
    }
    return {
      login: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ require: true, validator: validateUsername, message: '请输入用户名' }],
        password: [{ require: true, validator: validatePassword, message: '请输入密码' }]
      }
    }
  },
  methods: {
    submitForm (formName) {
      alert('登录了, 可能吧')
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
.Login-form-mask {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.05);
}
.Login-form {
  width: 420px;
  border-radius: 8px;
  box-shadow: 0 0 6px rgb(0 0 0 / 10%);
  padding: 25px 25px 0px 0px;
  box-sizing: border-box;
  position: relative;
}
</style>
