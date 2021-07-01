import axios from '../axios'

export const batchDelete = (data) => {
  return axios({
    url: '/sysBook.delete',
    method: 'post',
    data
  })
}

export const findById = (params) => {
  return axios({
    url: '/sysBook/findById',
    method: 'get',
    params
  })
}

export const findPage = (data) => {
  return axios({
    url: '/sysBook/findPage',
    method: 'post',
    data
  })
}

export const save = (data) => {
  return axios({
    url: '/sysBook/save',
    method: 'post',
    data
  })
}
