import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import NotFound from '@/views/NotFound.vue'
import HelloWorld from '@/views/HelloWorld.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '主页',
      component: HelloWorld
    }, {
      path: '/login',
      name: '登录',
      component: Login
    }, {
      path: '/:pathMatch(.*)*',
      name: '404 Not Found',
      component: NotFound
    }, {
      path: '/test',
      name: '测试页面',
      component: HelloWorld
    }
  ]
})
