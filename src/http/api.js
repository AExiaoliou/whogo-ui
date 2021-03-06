/*
 * 接口统一集成模块
 */
import * as login from './modules/login'
import * as user from './modules/user'
import * as dept from './modules/dept'
import * as role from './modules/role'
import * as menu from './modules/menu'
import * as dict from './modules/dict'
import * as config from './modules/config'
import * as log from './modules/log'
import * as loginlog from './modules/loginlog'
import * as test from './modules/test'
import * as monitor from './modules/monitor'

import * as student from './modules/student'
import * as teacher from './modules/teacher'
import * as cafe from './modules/cafe'
import * as cafemember from './modules/cafemember'
import * as book from './modules/book'
import * as bookmember from './modules/bookmember'

// 默认全部导出
export default {
  login,
  user,
  dept,
  role,
  menu,
  dict,
  config,
  log,
  loginlog,
  monitor,
  student,
  teacher,
  cafe,
  cafemember,
  book,
  bookmember,
  test
}
