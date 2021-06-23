<template>
  <div class="hello">
    <router-link to="/test">test</router-link>
    <router-link to="/home">home</router-link>
    <router-link to="/404">404 page</router-link>
    <router-link to="/login">login</router-link>
    <el-divider />
    <p>isSideCollapse_this$store = {{ isSideCollapse }}</p>
    <p>isSideCollapse_importstore = {{ isSideCollapse_importstore }}</p>
    <el-divider />
    <el-button @click="changeLang">测试i18n切换(中文,English) {{ $t('test') }}</el-button>
    <el-button @click="testAxios">测试axios</el-button>
  </div>
</template>

<script>
import store from '../store'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    isSideCollapse () {
      return this.$store.state.app.isSideCollapse
    },
    isSideCollapse_importstore () {
      return store.state.app.isSideCollapse
    }
  },
  methods: {
    changeLang () {
      var lang = this.$i18n.locale
      this.$i18n.locale = (lang === 'zh_cn') ? 'en_us' : 'zh_cn'
    },
    testAxios () {
      this.$api.test.test().then((res) => { alert(res.data) })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
