import Home from '@/views/Home'
import Login from '@/views/Login'
import Monitor from '@/views/Monitor'
import NotFound from '@/views/NotFound'
import SysBook from '@/views/SysBook'
import SysBookmember from '@/views/SysBookmember'
import SysCafe from '@/views/SysCafe'
import SysCafemember from '@/views/SysCafemember'
import SysStudent from '@/views/SysStudent'
import SysTeacher from '@/views/SysTeacher'
import User from '@/views/User'
import Test from '@/views/Test'
import Welcome from '@/views/Welcome'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
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
        },
        {
          path: 'sysbook',
          component: SysBook
        },
        {
          path: 'sysbookmember',
          component: SysBookmember
        },
        {
          path: 'syscafe',
          component: SysCafe
        },
        {
          path: 'syscafemember',
          component: SysCafemember
        },
        {
          path: 'sysstudent',
          component: SysStudent
        },
        {
          path: 'systeacher',
          component: SysTeacher
        },
        {
          path: 'user',
          component: User
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

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !sessionStorage.getItem('user')) {
    next({name: 'login'})
  } else next()
})

export default router
