<template>
  <div class="hello">
    <img src="@/assets/logo.png">
    <router-link to="/test">test</router-link>
    <router-link to="/home">home</router-link>
    <router-link to="/404">404 page</router-link>
    <router-link to="/login">login</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  text-align: center;
}
</style>
