import axios from '../axios'

/*
 * 系统登录模块
 */

// 登录
export const login = (data) => {
  // console.log('form')
  // console.log(data)
  return axios({
    url: 'login',
    method: 'post',
    data
  })
  // .then(res => {
  //   console.log('req')
  //   console.log(res)
  // })
}

// 登出
export const logout = () => {
  return axios({
    url: 'logout',
    method: 'get'
  })
}
