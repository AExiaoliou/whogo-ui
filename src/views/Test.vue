<template>
  <div class="hello">
    <router-link to="/test">test</router-link>
    <router-link to="/home">home</router-link>
    <router-link to="/404">404 page</router-link>
    <router-link to="/login">login</router-link>
    <br>
    <p>isSideCollapse_this$store = {{ isSideCollapse }}</p>
    <p>isSideCollapse_importstore = {{ isSideCollapse_importstore }}</p>
    <img src="@/assets/logo.png">
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
      return this.$store.state.isSideCollapse
    },
    isSideCollapse_importstore () {
      return store.state.isSideCollapse
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
