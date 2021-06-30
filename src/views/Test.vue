<template>
  <div class="hello">
    <router-link to="/test">test</router-link>
    <router-link to="/home">home</router-link>
    <router-link to="/404">404 page</router-link>
    <router-link to="/login">login</router-link>
    <el-divider>vuex 状态</el-divider>
    <div>state = {{ vuexState }}</div>
    <el-divider />
    <el-button @click="changeLang">测试i18n切换(中文,English) {{ $t('test') }}</el-button>
    <el-button @click="testAxios">测试axios</el-button>
    <el-divider>测试后端api, 默认是挂mockjs的, 生产环境会自动去除<br>如果不需要则在src/config里面改Mock属性</el-divider>
    <el-button @click="testRemote">点击测试</el-button>
    <el-radio-group v-model="httpMethod">
      <el-radio label="get">GET</el-radio>
      <el-radio label="post">POST</el-radio>
    </el-radio-group>
    <el-input autosize v-model="httpLink" />
    <el-input autosize v-model="postData" placeholder="data, 如果需要的话"/>
    <div>{{ httpRes }}</div>
  </div>
</template>

<script>
import axios from '@/http/axios'
import Cookies from 'js-cookie'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      httpLink: '/test/test',
      httpMethod: 'get',
      postData: null,
      httpRes: null
    }
  },
  computed: {
    vuexState () {
      return this.$store.state
    }
  },
  methods: {
    changeLang () {
      var lang = this.$i18n.locale
      this.$i18n.locale = (lang === 'zh_cn') ? 'en_us' : 'zh_cn'
    },
    testAxios () {
      this.$api.test.test().then((res) => { alert(res.data.name) })
    },
    testRemote () {
      console.log('测试')
      console.log({
        url: this.httpLink,
        method: this.httpMethod,
        data: this.data
      })
      console.log('cookie')
      console.log(Cookies.get())
      if (this.httpMethod === 'get') {
        axios({
          url: this.httpLink,
          method: this.httpMethod
        }).then((res) => { this.httpRes = res.data })
      } else {
        axios({
          url: this.httpLink,
          method: this.httpMethod,
          data: this.data
        }).then((res) => { this.httpRes = res.data })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
