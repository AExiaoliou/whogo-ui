import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import NotFound from '@/views/NotFound'
import Test from '@/views/Test'
import Welcome from '@/views/Welcome'
import Monitor from '@/views/Monitor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      alias: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'welcome',
          alias: '',
          component: Welcome
        },
        {
          path: 'monitor',
          component: Monitor
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/:pathMatch(.*)*',
      alias: '/404',
      name: 'notfound',
      component: NotFound
    }
  ]
})
