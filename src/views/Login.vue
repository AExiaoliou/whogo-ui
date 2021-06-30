<template>
  <div class="Login-form-mask">
    <el-form
      :model="loginForm"
      status-icon
      :rules="rules"
      ref="login"
      label-position="right"
      label-width="80px"
      class="Login-form"
    >
      <el-form-item :label="$t('login.username')" prop="username">
        <el-input auto-complete="false" v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item :label="$t('login.password')" prop="password">
        <el-input type="password" auto-complete="false" v-model="loginForm.password"></el-input>
      </el-form-item>
      <div v-if="false" style="display: flex; flex-direction: row">
        <el-form-item :label="$t('login.captcha')" prop="captcha">
          <el-input auto-complete="false" v-model="loginForm.captcha"></el-input>
        </el-form-item>
        <img :src="captchaSrc" style="margin-left: 10px" />
      </div>
      <div>
        <el-form-item>
          <el-button type="primary" @click="submitForm('login')">登录</el-button>
          <el-button @click="resetForm('login')">重置</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import config from '@/config'
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
      loginForm: {
        username: '',
        password: '',
        captcha: ''
      },
      rules: {
        username: [{ require: true, validator: validateUsername, message: '请输入用户名' }],
        password: [{ require: true, validator: validatePassword, message: '请输入密码' }]
      },
      captchaSrc: config.baseUrl + '/captcha.jpg',
      doCap: process.env.NODE_ENV !== 'production'
    }
  },
  methods: {
    submitForm (formName) {
      const loading = this.$loading({
        lock: true,
        text: '加载中',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      let userInfo = {
        account: this.loginForm.username,
        password: this.loginForm.password,
        captcha: this.loginForm.captcha
      }
      this.$api.login
        .login(userInfo)
        .then((res) => {
          Cookies.set('token', res.data.token) // 放置token到Cookie
          sessionStorage.setItem('user', userInfo.account) // 保存用户到本地会话
          // this.$store.commit('menuRouteLoaded', false) // 要求重新加载导航菜单
          this.$router.push('/') // 登录成功，跳转到主页
        })
        .catch((res) => {
          this.$message({
            message: res.message,
            type: 'error'
          })
        })
      loading.close()
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  },
  created () {
    console.log('账号: admin')
    console.log('密码: admin')
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
  background: rgba(255, 255, 255, 0.75);
}
</style>
