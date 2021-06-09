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
      alias: '/home',
      name: 'home',
      component: Home
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/test',
      name: 'test',
      component: HelloWorld
    }, {
      path: '/:pathMatch(.*)*',
      alias: '/404',
      name: 'notfound',
      component: NotFound
    }
  ]
})
