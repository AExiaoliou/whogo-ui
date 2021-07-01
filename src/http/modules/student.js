import axios from '../axios'

export const batchDelete = (data) => {
  return axios({
    url: '/sysStudent/delete',
    method: 'post',
    data
  })
}

export const findById = (params) => {
  return axios({
    url: '/sysStudent/findById',
    method: 'get',
    params
  })
}

export const findPage = (data) => {
  return axios({
    url: '/sysStudent/findPage',
    method: 'post',
    data
  })
}

export const save = (data) => {
  return axios({
    url: '/sysStudent/save',
    method: 'post',
    data
  })
}
