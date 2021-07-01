import axios from '../axios'

export const batchDelete = (data) => {
  return axios({
    url: '/sysBookmember/delete',
    method: 'post',
    data
  })
}

export const findById = (params) => {
  return axios({
    url: '/sysBookmember/findById',
    method: 'get',
    params
  })
}

export const findPage = (data) => {
  return axios({
    url: '/sysBookmember/findPage',
    method: 'post',
    data
  })
}

export const save = (data) => {
  return axios({
    url: '/sysBookmember/save',
    method: 'post',
    data
  })
}
